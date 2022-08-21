// @flow
import { createSelector } from 'reselect';
import { usernameSelector } from 'state/account/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import TXTYPES from 'constants/txtypes';

export const selectRequests = state => state.contacts.blockchain.requests;

const historySelector = state => state.transactions.history;

const currentUserSelector = createSelector(
  usernameSelector,
  profileSelectorFactory,
  (username, profileSelector) => profileSelector(username) || {},
);

// TODO: this needs to be refactored
export const selectTransactions = createSelector(
  historySelector,
  currentUserSelector,
  alternativeCurrencySelector,
  (history: Object[], user: Object, alternativeCurrency) => {
    const transactions = [];
    history.forEach((item) => {
      if (item.type === TXTYPES.MOVED) {
        return;
      }
      // TODO don't assume we receive every TX output
      const dashSat = item.to.reduce((accumulator, { valueSat }) => accumulator + valueSat, 0);
      const sender = { address: item.from[0].address };
      const receiver = { address: item.to[0].address };

      let typeText = 'OTHER';
      if (item.type === TXTYPES.RECEIVED) {
        // TODO refer to an imported constant
        typeText = TXTYPES.RECEIVED;
        receiver.username = user.username;
        receiver.avatarUrl = user.avatarUrl;
      } else if (item.type === TXTYPES.SENT) {
        // TODO refer to an imported constant
        typeText = TXTYPES.SENT;
        sender.username = user.username;
        sender.avatarUrl = user.avatarUrl;
      }

      const dashAmount = dashSat
        .toString(10)
        .padStart(9, '0')
        .replace(/(\d{8})$/, '.$1')
        .replace(/\.?0+$/, '');
      let fiatAmount = (dashSat * alternativeCurrency.rate) / 100000000;
      const { code } = alternativeCurrency;
      fiatAmount = fiatAmount.toFixed(2).toString(10);

      const timestamp = item.time ? new Date(item.time * 1000) : new Date();
      // unconfirmed txes are missing time field

      transactions.push({
        txid: item.txid,
        amount: dashAmount,
        currency: 'dash',
        fee: 0,
        timestamp, // time in seconds, JS time uses milliseconds
        type: typeText,
        sender,
        receiver,
        conversion: {
          amount: fiatAmount,
          currency: code.toLowerCase(),
          rate: 0,
        },
      });
    });
    return transactions;
  },
);

export const selectOngoingTransaction = state => state.transactions.ongoingTransaction;
