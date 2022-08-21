import {
  CHANGE_ALTERNATIVE_CURRENCY,
  ALTERNATIVE_CURRENCY_RATE_REQUEST,
  ALTERNATIVE_CURRENCY_RATE_SUCCESS,
  INVALIDATE_ALTERNATIVE_CURRENCY_RATE,
  DEFAULT_ALTERNATIVE_CURRENCY,
} from './constants';

export const initialState = DEFAULT_ALTERNATIVE_CURRENCY;

const alternativeCurrency = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_ALTERNATIVE_CURRENCY_RATE:
      return {
        ...state,
        didInvalidate: true,
      };

    case CHANGE_ALTERNATIVE_CURRENCY:
      return {
        ...initialState,
        code: action.code,
        name: action.name,
        symbol: action.symbol,
      };

    case ALTERNATIVE_CURRENCY_RATE_REQUEST:
      return {
        ...state,
        isFetching: true,
        rateUpdatedAt: undefined,
      };

    case ALTERNATIVE_CURRENCY_RATE_SUCCESS:
      return {
        ...state,
        rate: action.rate,
        isFetching: false,
        didInvalidate: false,
        rateUpdatedAt: Date.now(),
      };
    default:
      return state;
  }
};

export default alternativeCurrency;
