import { createSelector } from 'reselect';
import { PROFILE_STATES } from 'state/profiles/constants';

const scopeSelector = state => state.profiles;

export const filterParamsSelector = createSelector(
  scopeSelector, ({ filterParams }) => filterParams,
);

export const profileItemsSelector = createSelector(
  scopeSelector, ({ items }) => Object.values(items),
);

const profilesSelectorByFilterFactory = createSelector(
  profileItemsSelector,
  profiles => profileState => profiles.filter(({ state }) => state === profileState),
);

export const contactProfilesSelector = createSelector(
  profilesSelectorByFilterFactory,
  profilesSelectorByFilter => profilesSelectorByFilter(PROFILE_STATES.CONTACT),
);

export const sentContactRequestProfilesSelector = createSelector(
  profilesSelectorByFilterFactory,
  profilesSelectorByFilter => profilesSelectorByFilter(PROFILE_STATES.REQUEST_SENT),
);

export const sentContactRequestsUsernamesSelector = createSelector(
  sentContactRequestProfilesSelector,
  profiles => profiles.map(({ username }) => username),
);

export const receivedContactRequestProfilesSelector = createSelector(
  profilesSelectorByFilterFactory,
  profilesSelectorByFilter => profilesSelectorByFilter(PROFILE_STATES.REQUEST_RECEIVED),
);

export const receivedRequestsUsernamesSelector = createSelector(
  receivedContactRequestProfilesSelector,
  profiles => profiles.map(({ username }) => username),
);

export const profileSelectorFactory = createSelector(
  scopeSelector, ({ items }) => username => items[username],
);
