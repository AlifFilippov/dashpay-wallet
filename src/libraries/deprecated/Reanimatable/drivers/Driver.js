/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Animated } from 'react-native';

export default class Driver {
  constructor() {
    this.value = new Animated.Value(0);
    this.interpolate = this.interpolate.bind(this);
    this.setValue = this.setValue.bind(this);
    this.getAnimationProps = this.getAnimationProps.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  getAnimationProps() {
    return {};
  }

  startAnimation(configs, callback) {
    callback();
  }

  interpolate(configs) {
    return this.value.interpolate(configs);
  }

  setValue(value) {
    return this.value.setValue(value);
  }
}
