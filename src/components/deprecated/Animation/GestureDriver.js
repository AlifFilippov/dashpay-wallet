import { Animated, Easing } from 'react-native';
import { BaseDriver } from './BaseDriver';

export class GestureDriver extends BaseDriver {
  constructor(options = {}) {
    super(options);
  }

  toValue(endValue, onFinish) {
    Animated.timing(this.value, {
      toValue: endValue,
      ...this.animationOptions
    }).start(onFinish);
  }
}
