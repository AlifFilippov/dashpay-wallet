// @flow
import { getTransactionHistory } from 'state/transactions';
import { EVENTS } from '@dashevo/wallet-lib';
import { ACCOUNTS_RECEIVE_BALANCE } from 'state/action-types';

import { random } from 'lodash';

export const INITIALIZE_WALLET_REQUEST = 'INITIALIZE_WALLET_REQUEST';
export const INITIALIZE_WALLET_SUCCESS = 'INITIALIZE_WALLET_SUCCESS';
export const INITIALIZE_WALLET_FAILURE = 'INITIALIZE_WALLET_FAILURE';

export const initializeWallet = () => (dispatch, getState, walletLib) => dispatch({
  types: [INITIALIZE_WALLET_REQUEST, INITIALIZE_WALLET_SUCCESS, INITIALIZE_WALLET_FAILURE],
  async asyncTask() {
    const state = getState();
    const {
      mnemonic, username, network, transport,
    } = state.account;
    await walletLib.initialize({
      mnemonic,
      username,
      network,
      transport,
    });

    walletLib.account.events.on(EVENTS.UNCONFIRMED_BALANCE_CHANGED, () => {
      dispatch({
        type: ACCOUNTS_RECEIVE_BALANCE,

        // getTotalBalance(returnDuffs = true)
        response: walletLib.account.getTotalBalance(true),
      });
      dispatch(getTransactionHistory());
    });

    const balance = walletLib.account.getTotalBalance();
    dispatch({
      type: ACCOUNTS_RECEIVE_BALANCE,
      response: balance,
    });
    dispatch(getTransactionHistory());
  },
});

// TMP
function e() {}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getInitialState(progress = e) {
  return dispatch => dispatch({
    types: [
      'GET_INITIAL_STATE_REQUEST',
      'GET_INITIAL_STATE_SUCCESS',
      'GET_INITIAL_STATE_FAILURE',
    ],
    async asyncTask() {
      try {
        let count = 0;
        const promises = [
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          wait(random(250, 2500)),
          dispatch(initializeWallet()),
        ];
        progress(0);
        promises.forEach((promise) => {
          promise.then(() => {
            count += 1;
            progress((count * 100) / promises.length);
          });
        });
        return Promise.all(promises);
      } catch (err) {
        const { message = 'Something went wrong.' } = err;
        throw new Error(message);
      }
    },
  });
}
