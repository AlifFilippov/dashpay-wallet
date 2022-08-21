/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { FETCH_CURRENT_USER_ASYNC } from './action-types';

export type User = {
  username?: string,
  avatarUrl?: string,
};

export type Action = {
  types: FETCH_CURRENT_USER_ASYNC,
  payload: User,
};

export type State = {
  user: User,
};
