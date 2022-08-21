/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { combineReducers } from 'redux';

// Internal dependencies
import receive from './receive/reducer';
import send from './send/reducer';

export default combineReducers({
  receive,
  send
});
