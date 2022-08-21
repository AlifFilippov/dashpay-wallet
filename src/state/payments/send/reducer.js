/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const SEND = 'SEND';

// External dependencies
import { combineReducers } from 'redux';
import { uniq } from 'lodash';
import { compact } from 'lodash';

import { CREATE_SEND_PAYMENT_TRANSACTION_REQUEST } from 'state/action-types';
import { CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS } from 'state/action-types';
import { CREATE_SEND_PAYMENT_TRANSACTION_FAILURE } from 'state/action-types';

import { BROADCAST_SEND_PAYMENT_TRANSACTION_REQUEST } from 'state/action-types';
import { BROADCAST_SEND_PAYMENT_TRANSACTION_SUCCESS } from 'state/action-types';
import { BROADCAST_SEND_PAYMENT_TRANSACTION_FAILURE } from 'state/action-types';

export function isSending(state = {}, action) {
  switch (action.type) {
    case BROADCAST_SEND_PAYMENT_TRANSACTION_REQUEST:
    case BROADCAST_SEND_PAYMENT_TRANSACTION_SUCCESS:
    case BROADCAST_SEND_PAYMENT_TRANSACTION_FAILURE:
      return BROADCAST_SEND_PAYMENT_TRANSACTION_REQUEST === action.type;

    default:
      return state;
  }
}

export function byRecipients(state = {}, action) {
  switch (action.type) {
    case CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS:
      const { recipient, tx } = action.response;
      return Object.assign({}, state, {
        [recipient]: compact([...state[recipient], action.response.tx.id])
      });

    default:
      return state;
  }
}

export function items(state = {}, action) {
  switch (action.type) {
    case CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS:
      const { recipient, dashAmount, fiatAmount, tx } = action.response;
      return Object.assign({}, state, {
        [tx.id]: {
          id: tx.id,
          recipient,
          dashAmount,
          fiatAmount,
          timestamp: Date.now()
        }
      });

    default:
      return state;
  }
}

export function order(state = [], action) {
  switch (action.type) {
    case CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS:
      return uniq(state.concat(action.response.tx.id));

    default:
      return state;
  }
}

export default combineReducers({
  isSending,
  byRecipients,
  items,
  order
});
