/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { findIndex } from 'lodash';

// this tiny library is in progress
// should be able to generate conversions as well.
//
// const conversions = {
//   ['DASH']: {
//     code: 'DASH',
//     name: 'Dash ',
//     rates: {
//       USD: 92.22,
//       EUR: 81.48
//     }
//   },
//   ['USD']: {
//     code: 'USD',
//     name: 'US Dollar',
//     rates: {
//       DASH: 0.01084363478638039470830622424637,
//       EUR: 0.88353936239427456083279115159401
//     }
//   },
//   ['EUR']: {
//     code: 'EUR',
//     name: 'EURO',
//     rates: {
//       DASH: 0.01227295041728031418753068237604,
//       USD: 1.1318114874815905743740795287187
//     }
//   }
// }

export function getNextCurrency(currencies, currentCurrency) {
  let countCurrencies = currencies.length;

  let currentCurrencyIndex = findIndex(
    currencies,
    currency => currency === currentCurrency
  );

  let nextCurrencyIndex = currentCurrencyIndex + 1;
  nextCurrencyIndex = nextCurrencyIndex % countCurrencies;

  return currencies[nextCurrencyIndex];
}

export function convert(amount, fromCurrency, toCurrency, conversions) {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const exchangeRates = conversions[fromCurrency].rates;
  const exchangeRate = exchangeRates[toCurrency];

  if (!exchangeRate) {
    return amount;
  }

  return (amount * exchangeRate).toFixed(10).toString();
}

export default {
  getNextCurrency,
  convert
};
