/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
// TMP
// getStatusBarHeight
import { Dimensions, Platform, StatusBar } from 'react-native';

export { debounce } from 'lodash';
export { isFunction } from 'lodash';
export { default as compose } from './deprecated/compose';
export { default as emptyfunction } from './deprecated/emptyfunction';
export { default as renderProps } from './deprecated/renderProps';
export { default as shallowEqual } from './deprecated/shallowEqual';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX = (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT)
    || (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
}

export function getStatusBarHeight(skipAndroid: boolean = false): number {
  return Platform.select({
    ios: isIPhoneX ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}

export { combineReducers } from 'redux';
