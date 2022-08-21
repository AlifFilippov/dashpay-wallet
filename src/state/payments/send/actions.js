/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import { CREATE_SEND_PAYMENT_TRANSACTION_REQUEST } from 'state/action-types';
import { CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS } from 'state/action-types';
import { CREATE_SEND_PAYMENT_TRANSACTION_FAILURE } from 'state/action-types';

const DUFFS_PER_DASH = 100000000;

function dashToDuffs(dash) {
  if (dash === undefined || dash.constructor.name !== 'Number') {
    throw new Error(`Can only convert a number ${dash}`);
  }
  return parseInt((dash * DUFFS_PER_DASH).toFixed(0), 10);
}

export const createSendPaymentTransaction = opts => {
  return (dispatch, getState, walletLib) =>
    dispatch({
      types: [
        CREATE_SEND_PAYMENT_TRANSACTION_REQUEST,
        CREATE_SEND_PAYMENT_TRANSACTION_SUCCESS,
        CREATE_SEND_PAYMENT_TRANSACTION_FAILURE
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

          const txid = await walletLib.account.broadcastTransaction(tx);

          return {
            ...opts,
            tx
          };
        } catch (err) {
          const { message = 'Something went wrong.' } = err;
          throw new Error(message);
        }
      }
    });
};
