/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { DEFAULT_SETTINGS, CHANGE_SETTINGS } from './constants';

export const initialState = DEFAULT_SETTINGS;

const settings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return { ...state, ...action.settings };

    default:
      return state;
  }
};

export default settings;
