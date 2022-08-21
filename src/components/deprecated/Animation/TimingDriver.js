import { Animated, Easing } from 'react-native';
import { BaseDriver } from './BaseDriver';

export class TimingDriver extends BaseDriver {
  constructor(options = {}) {
    super(options);

    this.animationOptions = {
      easing: Easing.cubic,
      useNativeDriver: true,
      duration: 128,
      ...options
    };

    this.toValue = this.toValue.bind(this);
  }

  toValue(endValue, onFinish) {
    Animated.timing(this.value, {
      toValue: endValue,
      ...this.animationOptions
    }).start(onFinish);
  }
}
