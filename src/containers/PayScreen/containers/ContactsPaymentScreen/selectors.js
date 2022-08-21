// @flow
import { createSelector } from 'reselect';
import {
  filterParamsSelector,
  profileItemsSelector,
} from 'state/profiles/selectors';
import { currentUserSelector } from 'state/account/selectors';
import type { FilterParams, Profile } from 'state/profiles/types';
import { PROFILE_STATES } from 'state/profiles/constants';
import type { Section } from './types';

const filteredAndSortedProfilesSelector = createSelector(
  currentUserSelector,
  filterParamsSelector,
  profileItemsSelector,
  (
    currentUser: Profile,
    filterParams: FilterParams,
    items: Array<Profile>,
  ) => {
    let result = items.filter(({ username }) => username !== currentUser.username);
    if (filterParams.isActive) {
      const query = filterParams.query.toLowerCase();
      result = result
        .filter(item => item.username.toLowerCase().indexOf(query) >= 0);
    } else {
      result = result.filter(({ state }) => state === PROFILE_STATES.CONTACT);
    }
    return result.sort((a: Profile, b: Profile) => a.username.localeCompare(b.username));
  },
);

const contactProfilesSelector = createSelector(
  filteredAndSortedProfilesSelector,
  items => items.filter(({ state }) => state === PROFILE_STATES.CONTACT),
);

const mostFrequentProfilesSelector = createSelector(
  filteredAndSortedProfilesSelector,
  items => items
    .filter(({ state }) => state === PROFILE_STATES.CONTACT)
    .sort((a: Profile, b: Profile) => a.timestamp - b.timestamp)
    .slice(0, 3),
);

const selectors = createSelector(
  contactProfilesSelector,
  mostFrequentProfilesSelector,
  (
    contactProfiles: Array<Profile>,
    mostFrequentProfiles: Array<Profile>,
  ) => {
    const sections = [
      {
        title: 'Most frequent',
        data: mostFrequentProfiles,
      },
      {
        title: 'Contacts',
        data: contactProfiles,
      },

    ].filter(({ data }: Section) => data.length);
    return { sections };
  },
);

export default selectors;
