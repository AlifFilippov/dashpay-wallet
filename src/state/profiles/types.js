// @flow
import { PROFILE_STATES } from './constants';

export type Profile = {
  username: string,
  avatarUrl: ?string,
  bio: ?string,
  state: $Values<PROFILE_STATES>,
  timestamp: Date,
}

export type FilterParams = {
  query: string,
  isActive: Boolean,
}
