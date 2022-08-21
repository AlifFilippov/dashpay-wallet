/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { createSelector } from 'reselect';

// Internal dependencies
import { getCurrentUser } from 'state/user/selectors';

const selector = createSelector(
  getCurrentUser,
  currentUser => ({
    currentUser,
  }),
);

export default selector;
