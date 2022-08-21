import { createSelector } from 'reselect';
import { orderBy } from 'lodash';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';

const recipientSelector = (state, props) => props.navigation.getParam('recipient', '');
const dashAmountSelector = (state, props) => props.navigation.getParam('amount') || 0;
const sentPaymentsSelector = state => state.payments.send;

export default createSelector(
  recipientSelector,
  profileSelectorFactory,
  alternativeCurrencySelector,
  sentPaymentsSelector,
  dashAmountSelector,
  (
    recipient, profileSelector,
    alternativeCurrency, sentPayments, dashAmount,
  ) => {
    const receiver = profileSelector(recipient) || {};
    let transactions = sentPayments.byRecipients[recipient] || [];

    const sender = {}; // Tmp

    transactions = transactions.map((transactionId) => {
      const transaction = sentPayments.items[transactionId];
      return {
        dashAmount: transaction.dashAmount,
        fiatAmount: transaction.fiatAmount,
        timestamp: transaction.timestamp,
        receiver,
        sender,
      };
    });

    transactions = orderBy(transactions, ['timestamp'], ['desc']);

    const fiatAmount = dashAmount * alternativeCurrency.rate;

    return {
      alternativeCurrency,
      transactions,
      receiver,
      sender,
      initialValues: {
        dashAmount,
        fiatAmount,
        recipient,
        username: '',
        avatarUrl: '',
        ...receiver,
      },
    };
  },
);
