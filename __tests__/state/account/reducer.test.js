import {
  ACCOUNTS_RECEIVE_BALANCE,
  ACCOUNTS_GET_UNUSED_ADDRESS,
} from 'state/action-types';
import reducer, { initialState } from 'state/account/reducer';

describe('account reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ACCOUNTS_RECEIVE_BALANCE', () => {
    const payload = { response: 100, type: ACCOUNTS_RECEIVE_BALANCE };
    const expectedState = { ...initialState, balance: 100 };
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });

  it('should handle ACCOUNTS_GET_UNUSED_ADDRESS', () => {
    const payload = {
      type: ACCOUNTS_GET_UNUSED_ADDRESS,
      unusedAddress: 'unusedAddress',
    };
    const expectedState = { ...initialState, unusedAddress: 'unusedAddress' };
    expect(reducer(undefined, payload)).toEqual(expectedState);
  });
});
