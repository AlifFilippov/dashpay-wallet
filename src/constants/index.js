/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Dimensions } from 'react-native';

export { default as COLORS } from './colors';
export { default as THEMES } from './theming';
export { default as LENGTHS } from './lengths';
export { default as ALTERNATIVE_CURRENCIES } from './alternativeCurrencies';
export { default as TXTYPES } from './txtypes';

export * from './defaults';

export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
