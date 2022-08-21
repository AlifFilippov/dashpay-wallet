/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { GET_TRANSACTIONS_SUCCESS } from 'state/transactions/constants';
import reducer from 'state/transactions/reducer';

const initialState = {
  history: [],
  ongoingTransaction: {
    recipient: '',
    amount: 0,
    currency: 'DASH',
  },
};

describe('transactions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_TRANSACTIONS_SUCCESS', () => {
    const response = [{ txid: 'test1' }, { txid: 'test2' }];
    expect(
      reducer(undefined, { type: GET_TRANSACTIONS_SUCCESS, response }),
    ).toEqual({ ...initialState, history: response });
  });
});
