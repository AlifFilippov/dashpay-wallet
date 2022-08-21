import { ALTERNATIVE_CURRENCIES } from 'constants';
import {
  CHANGE_ALTERNATIVE_CURRENCY,
  ALTERNATIVE_CURRENCY_RATE_REQUEST,
  ALTERNATIVE_CURRENCY_RATE_SUCCESS,
  ALTERNATIVE_CURRENCY_RATE_FAILURE,
  INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
  ALTERNATIVE_CURRENCY_RATE_LIFESPAN,
} from './constants';

function shouldFetchRate({ isFetching, didInvalidate, rateUpdatedAt }) {
  if (isFetching) {
    return false;
  }
  if (didInvalidate || !rateUpdatedAt) {
    return true;
  }
  return Date.now() - rateUpdatedAt > ALTERNATIVE_CURRENCY_RATE_LIFESPAN;
}

async function getSparkRate(currencyCode) {
  const response = await fetch(`https://api.get-spark.com/${currencyCode}`);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
}

async function getCryptoCompareRate(currencyCode) {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=DASH&tsyms=${currencyCode}`,
  );
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json[currencyCode];
  }
}

async function getCasaVesRate() {
  const response = await fetch('https://dash.casa/api/?cur=VES');
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const json = await response.json();
    return json.dashrate;
  }
}

const DEFAULT_STRATEGIES = [
  {
    name: 'Spark',
    getRate: getSparkRate,
  },
  {
    name: 'CryptoCompare',
    getRate: getCryptoCompareRate,
  },
];

const CASA_STRATEGY = {
  name: 'Casa',
  getRate: getCasaVesRate,
};

async function getRate(code) {
  const strategies = DEFAULT_STRATEGIES;
  if (code === 'VES') {
    strategies.unshift(CASA_STRATEGY);
  }

  for (let i = 0; i < strategies.length; i += 1) {
    const strategy = strategies[i];
    /* eslint-disable no-await-in-loop */
    const rate = await strategy.getRate(code).catch((error) => {
      console.error(`Alternative currency strategy failed (${strategy.name})`, error);
      return undefined;
    });
    /* eslint-disable no-await-in-loop */
    if (rate) {
      return rate;
    }
  }
}

export function changeAlternativeCurrency(code) {
  const alternativeCurrency = ALTERNATIVE_CURRENCIES.find(
    currency => currency.code === code,
  );
  return {
    type: CHANGE_ALTERNATIVE_CURRENCY,
    ...alternativeCurrency,
  };
}

export const invalidateAlternativeCurrencyRate = () => ({
  type: INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
});

export const fetchAlternativeCurrencyRateIfNeeded = () => async (dispatch, getState) => {
  const state = getState().alternativeCurrency;
  const { code } = state;
  if (shouldFetchRate(state)) {
    dispatch({ type: ALTERNATIVE_CURRENCY_RATE_REQUEST });
    const rate = await getRate(code);
    if (!rate) {
      dispatch({ type: ALTERNATIVE_CURRENCY_RATE_FAILURE });
    } else {
      dispatch({ type: ALTERNATIVE_CURRENCY_RATE_SUCCESS, rate });
    }
  }
};
