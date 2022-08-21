/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import * as ActionsTypes from './constants';
const DUFFS_PER_DASH = 100000000;

function dashToDuffs(dash) {
  if (dash === undefined || dash.constructor.name !== 'Number') {
    throw new Error(`Can only convert a number ${dash}`);
  }
  return parseInt((dash * DUFFS_PER_DASH).toFixed(0), 10);
}

/**
 * Create a valid transaction ready to be broadcasted from the provided options
 * @param opts
 * @param opts.satoshis
 * @param opts.recipient
 * @return Promise<Dashcore.Transaction>
 */
export const createTransaction = opts => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.CREATE_TX_REQUEST,
        ActionsTypes.CREATE_TX_SUCCESS,
        ActionsTypes.CREATE_TX_FAILURE
      ],
      async asyncTask(state) {
        try {
          if (!opts.recipient) {
            throw new Error('Missing recipient to pay');
          }

          const recipient = opts.recipient;
          const satoshis =
            opts.satoshis !== undefined
              ? opts.satoshis
              : dashToDuffs(parseFloat(opts.amount));
          if (!satoshis) throw new Error('Missing satoshis or amount to pay');

          const tx = walletLib.account.createTransaction({
            recipient,
            satoshis
          });

          return walletLib.account.broadcastTransaction(tx);
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};

/**
 * Will broadcast the rawtx to the active network
 * @param rawtx - string - The hex raw representation of a transaction
 * @return Promise<string> - txid
 */
export const broadcastTransaction = tx => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.BROADCAST_TX_REQUEST,
        ActionsTypes.BROADCAST_TX_SUCCESS,
        ActionsTypes.BROADCAST_TX_FAILURE
      ],
      async asyncTask(state) {
        try {
          return walletLib.account.broadcast(tx);
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};

/**
 * Get the transaction history of the active account
 * @return Promise<Object>
 */
export const getTransactionHistory = () => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.GET_TRANSACTIONS_REQUEST,
        ActionsTypes.GET_TRANSACTIONS_SUCCESS,
        ActionsTypes.GET_TRANSACTIONS_FAILURE
      ],
      async asyncTask(state) {
        try {
          return walletLib.account.getTransactionHistory();
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};

/**
 * Get the transaction history of the active account
 * @return Promise<Object>
 */
export const createPaymentTransaction = data => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        ActionsTypes.CREATE_PAYMENT_TRANSACTION_REQUEST,
        ActionsTypes.CREATE_PAYMENT_TRANSACTION_SUCCESS,
        ActionsTypes.CREATE_PAYMENT_TRANSACTION_FAILURE
      ],
      async asyncTask(state) {
        try {
          return data;
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};

/**
 *
 */
export const transactionRecipientScanned = payload => ({
  type: ActionsTypes.TRANSACTION_RECIPIENT_SCANNED,
  payload
});
