import reducer from 'state/profiles/reducer';
import mockDate from 'mockdate';
import {
  PROFILES_GET_BY_BUSERNAME_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_GET_CONTACTS_ASYNC,
  PROFILES_GET_PENDING_REQUESTS_ASYNC,
  PROFILES_SET_FILTER,
  PROFILES_CLEAR_FILTER,
} from 'state/action-types';
import { PROFILE_STATES } from 'state/profiles/constants';

const createProfileResponse = username => ({
  buser: { username },
  $meta: { userId: `${username}_userId` },
  avatarUrl: `https://api.adorable.io/avatars/285/${username}.png`,
  bio: `${username} bio`,
});

const createProfile = (username, state = PROFILE_STATES.UNKNOWN) => ({
  username,
  userId: `${username}_userId`,
  avatarUrl: `https://api.adorable.io/avatars/285/${username}.png`,
  bio: `${username} bio`,
  state,
});

describe('reducer', () => {
  describe('filterParams', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).filterParams).toEqual({ query: '', isActive: false });
    });

    it('should handle SET_FILTER', () => {
      const payload = { filterParams: { query: 'test' }, type: PROFILES_SET_FILTER };
      const expectedState = { query: 'test', isActive: true };
      expect(reducer(undefined, payload).filterParams).toEqual(expectedState);
    });

    it('should handle PROFILES_CLEAR_FILTER', () => {
      const state = { filterParams: { query: 'test', isActive: true } };
      const payload = { type: PROFILES_CLEAR_FILTER };
      const expectedState = { query: '', isActive: false };
      expect(reducer(state, payload).filterParams).toEqual(expectedState);
    });
  });

  describe('items', () => {
    it('should default to an empty object', () => {
      const state = reducer(undefined, {}).items;
      expect(state).toEqual({});
    });

    it('should handle PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS', () => {
      const username = 'testUserName';
      const now = Date.now();
      const response = [createProfileResponse(username)];
      const payload = {
        type: PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS,
        response,
      };
      const expectedState = {
        [username]: {
          ...createProfile(username),
          timestamp: now,
        },
      };
      mockDate.set(now);
      expect(reducer(undefined, payload).items).toEqual(expectedState);
      mockDate.reset();
    });

    it('should handle PROFILES_GET_CONTACTS_ASYNC.SUCCESS', () => {
      const username = 'testUserName';
      const response = [createProfileResponse(username)];
      const payload = {
        type: PROFILES_GET_CONTACTS_ASYNC.SUCCESS,
        response,
      };
      const now = Date.now();
      const expectedState = {
        [username]: {
          ...createProfile(username, PROFILE_STATES.CONTACT),
          timestamp: now,
        },
      };
      mockDate.set(now);
      expect(reducer(undefined, payload).items).toEqual(expectedState);
      mockDate.reset();
    });

    it('should handle PROFILES_SEARCH_ASYNC.SUCCESS', () => {
      const username = 'testUserName';
      const now = Date.now();
      const response = [createProfileResponse(username)];
      const payload = {
        type: PROFILES_SEARCH_ASYNC.SUCCESS,
        response,
      };
      const expectedState = {
        [username]: {
          ...createProfile(username),
          timestamp: now,
        },
      };
      mockDate.set(now);
      expect(reducer(undefined, payload).items).toEqual(expectedState);
      mockDate.reset();
    });

    it('should handle PROFILES_GET_PENDING_REQUESTS_ASYNC.SUCCESS', () => {
      const usernameRequestReceived = 'testUserNameRequestReceived';
      const usernameRequestSent = 'testUserNameRequestSent';
      const now = Date.now();
      const response = {
        received: [{
          sender: createProfileResponse(usernameRequestReceived),
        }],
        sent: [{
          receiver: createProfileResponse(usernameRequestSent),
        }],
      };
      const payload = {
        type: PROFILES_GET_PENDING_REQUESTS_ASYNC.SUCCESS,
        response,
      };
      const expectedState = {
        [usernameRequestReceived]: {
          ...createProfile(usernameRequestReceived, PROFILE_STATES.REQUEST_RECEIVED),
          timestamp: now,
        },
        [usernameRequestSent]: {
          ...createProfile(usernameRequestSent, PROFILE_STATES.REQUEST_SENT),
          timestamp: now,
        },
      };
      mockDate.set(now);
      expect(reducer(undefined, payload).items).toEqual(expectedState);
      mockDate.reset();
    });
  });
});
