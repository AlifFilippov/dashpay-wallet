/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { DEFAULT_LOCALE } from 'constants';
import { GET_DEVICE_LOCALE_SUCCESS } from './constants';
import { CHANGE_LOCALE } from './constants';

export const initialState = DEFAULT_LOCALE;

const language = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICE_LOCALE_SUCCESS:
      return action.response;

    case CHANGE_LOCALE:
      return action.locale;

    default:
      return state;
  }
};

export default language;
