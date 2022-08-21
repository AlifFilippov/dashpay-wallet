/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { combineReducers } from 'redux';

const RECEIVE = 'RECEIVE';

export function isSending(state = {}, action) {
  switch (action.type) {
    case RECEIVE:

    default:
      return state;
  }
}

export function byRecipients(state = {}, action) {
  switch (action.type) {
    case RECEIVE:

    default:
      return state;
  }
}

export function items(state = {}, action) {
  switch (action.type) {
    case RECEIVE:

    default:
      return state;
  }
}

export function order(state = {}, action) {
  switch (action.type) {
    case RECEIVE:

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
