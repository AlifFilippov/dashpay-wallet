/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import {
  GET_TRANSACTIONS_SUCCESS,
  TRANSACTION_RECIPIENT_SCANNED,
  CREATE_PAYMENT_TRANSACTION_SUCCESS,
} from './constants';

export const initialState = {
  history: [],
  ongoingTransaction: {
    recipient: '',
    amount: 0,
    currency: 'DASH',
  },
};

const ongoingTransaction = (state, action) => {
  switch (action.type) {
    case TRANSACTION_RECIPIENT_SCANNED:
      // Remove prefix from dashaddress if exists.
      return {
        ...state,
        recipient: (action.payload.data || '').replace('dash:', ''),
      };
    default:
      return state;
  }
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        history: action.response,
      };

    case CREATE_PAYMENT_TRANSACTION_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          [action.response.recipient]: (state.history[action.response.recipient] || []).concat({
            recipient: action.response.recipient,
            dashAmount: action.response.dashAmount,
            fiatAmount: action.response.fiatAmount,
            timestamp: new Date().getTime(),
          }),
        },
      };

    default:
      return {
        ...state,
        ongoingTransaction: ongoingTransaction(state.ongoingTransaction, action),
      };
  }
};

export default transactions;
