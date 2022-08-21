import {
  PROFILES_GET_BY_BUSERNAME_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_GET_CONTACTS_ASYNC,
  PROFILES_GET_PENDING_REQUESTS_ASYNC,
  PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC,
  PROFILES_CONTACT_REQUEST_SEND_ASYNC,
} from 'state/action-types';
import {
  PROFILE_STATES,
  PROFILE_STATE_PRIORITY,
} from 'state/profiles/constants';

const profileMapper = ({
  bio,
  avatarUrl,
  buser: { username },
  $meta: { userId },
}) => ({
  username,
  userId,
  avatarUrl,
  bio,
});

const getCachedProfileState = (cachedProfile = {}) => cachedProfile.state || PROFILE_STATES.UNKNOWN;

const profileResponseReducerFactory = (
  state, newState = PROFILE_STATES.UNKNOWN,
) => (results, profileResponse) => {
  const profile = profileMapper(profileResponse);
  const { username } = profile;
  const cachedProfile = state[username];
  let profileState = getCachedProfileState(cachedProfile) || PROFILE_STATES.UNKNOWN;
  if (PROFILE_STATE_PRIORITY[profileState] <= PROFILE_STATE_PRIORITY[newState]) {
    profileState = newState;
  }

  // TODO: remove this when we will have an option
  //       to get block timestamp from DAPI
  if (!cachedProfile || !cachedProfile.timestamp) {
    profile.timestamp = Date.now();
  }

  return {
    ...results,
    [username]: {
      ...cachedProfile,
      ...profile,
      state: profileState,
    },
  };
};

const items = (state = {}, action) => {
  switch (action.type) {
    case PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS:
    case PROFILES_SEARCH_ASYNC.SUCCESS:
      return action.response
        .reduce(profileResponseReducerFactory(state), state);
    case PROFILES_GET_CONTACTS_ASYNC.SUCCESS:
      return action.response
        .reduce(profileResponseReducerFactory(
          state, PROFILE_STATES.CONTACT,
        ), state);
    case PROFILES_GET_PENDING_REQUESTS_ASYNC.SUCCESS:
      return {
        ...action.response.received.map(({ sender }) => sender)
          .reduce(profileResponseReducerFactory(
            state, PROFILE_STATES.REQUEST_RECEIVED,
          ), state),
        ...action.response.sent.map(({ receiver }) => receiver)
          .reduce(profileResponseReducerFactory(
            state, PROFILE_STATES.REQUEST_SENT,
          ), state),
      };
    case PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC.SUCCESS:
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          state: PROFILE_STATES.CONTACT,
        },
      };
    case PROFILES_CONTACT_REQUEST_SEND_ASYNC.SUCCESS:
      return {
        ...state,
        [action.username]: {
          ...state[action.username],
          state: PROFILE_STATES.REQUEST_SENT,
        },
      };

    default:
      return state;
  }
};

export default items;
