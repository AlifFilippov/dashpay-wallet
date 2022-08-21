/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { MAKE_PAYMENT } from './constants';
import { PAYMENT_COMPLETED } from './constants';
import { PAYMENT_FAILED } from './constants';

const currency = (state = { isInProgress: false }, action) => {
  switch (action.type) {
    case MAKE_PAYMENT:
      return {
        ...state,
        recipient: action.recipient,
        amount: action.amount,
        isInProgress: true,
      };

    case PAYMENT_COMPLETED:
      return {
        ...state,
        recipient: action.recipient,
        amount: action.amount,
        isInProgress: false,
      };

    case PAYMENT_FAILED:
      return {
        ...state,
        recipient: action.recipient,
        amount: action.amount,
        isInProgress: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default currency;
