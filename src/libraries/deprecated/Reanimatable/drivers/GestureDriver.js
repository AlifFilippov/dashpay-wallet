/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { Animated } from 'react-native';
import { PanResponder } from 'react-native';
import Driver from './Driver';

class GestureDriver extends Driver {
  constructor(configs = {}) {
    super(configs);

    this.panResponder = PanResponder.create(configs);
    this.getAnimationProps = this.getAnimationProps.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  getAnimationProps() {
    return this.panResponder.panHandlers;
  }

  startAnimation(configs, onFinish) {
    Animated.timing(this.value, {
      ...this.configs,
      ...configs
    }).start(onFinish);
  }
}

export default GestureDriver;
