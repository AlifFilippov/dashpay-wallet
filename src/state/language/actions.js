/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import DeviceInfo from 'react-native-device-info';
import { CHANGE_LOCALE } from './constants';
import { GET_DEVICE_LOCALE_REQUEST } from './constants';
import { GET_DEVICE_LOCALE_SUCCESS } from './constants';
import { GET_DEVICE_LOCALE_FAILURE } from './constants';

export const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  locale
});

export const getDeviceLocale = () => ({
  types: [
    GET_DEVICE_LOCALE_REQUEST,
    GET_DEVICE_LOCALE_SUCCESS,
    GET_DEVICE_LOCALE_FAILURE
  ],
  async asyncTask(state) {
    try {
      return DeviceInfo.getDeviceLocale();
    } catch (err) {
      const { message = 'Something went wrong.' } = err;
      throw new Error(message);
    }
  }
});
