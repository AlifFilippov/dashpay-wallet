import { Animated, Easing } from 'react-native';
import { BaseDriver } from './BaseDriver';

export class SpringDriver extends BaseDriver {
  constructor(options = {}) {
    super(options);

    this.animationOptions = {
      friction: 7,
      tension: 40,
      ...options
    };

    this.toValue = this.toValue.bind(this);
  }

  toValue(endValue, onFinish) {
    Animated.spring(this.value, {
      toValue: endValue,
      ...this.animationOptions
    }).start(onFinish);
  }
}
