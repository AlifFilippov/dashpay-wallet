import { createSelector } from 'reselect';
import { currentUserSelector } from 'state/account/selectors';
import { profileSelectorFactory } from 'state/profiles/selectors';

export default createSelector(
  currentUserSelector,
  profileSelectorFactory,
  (cachedUser, profileSelector) => {
    const { username } = cachedUser;
    const user = profileSelector(username) || cachedUser;
    return {
      user,
    };
  },
);
