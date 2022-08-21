import { createSelector } from 'reselect';
import {
  contactProfilesSelector,
  receivedContactRequestProfilesSelector,
} from 'state/profiles/selectors';
import { selectTransactions } from 'state/transactions';

const selectors = createSelector(
  selectTransactions,
  receivedContactRequestProfilesSelector,
  contactProfilesSelector,
  (transactions, receivedContactRequestProfiles, contactProfiles) => {
    const activity = [
      ...transactions.map(data => ({ type: 'wallet', data })),
      ...receivedContactRequestProfiles.map(data => ({ type: 'social', data })),
      ...contactProfiles.map(data => ({ type: 'social', data })),
    ].sort((a, b) => b.data.timestamp - a.data.timestamp);

    return {
      activity,
    };
  },
);

export default selectors;
