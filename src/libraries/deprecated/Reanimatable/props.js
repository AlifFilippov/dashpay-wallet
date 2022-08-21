/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Easing } from 'react-native';
import { TimingDriver } from './drivers';

function driver(configs) {
  return new TimingDriver(configs);
}

export default {
  easing: Easing.bezier(0.645, 0.045, 0.355, 1.0),
  animations: {},
  toValue: 1,
  driver
};
