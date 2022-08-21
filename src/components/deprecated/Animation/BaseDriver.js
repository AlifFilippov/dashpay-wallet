import { Animated } from 'react-native';

/**
 * The base animation driver that all animations
 * drivers should extend. This class defines the
 * common interface of all animation drivers.
 */
export class BaseDriver {
  constructor() {
    this.value = new Animated.Value(0);
  }

  interpolate(config) {
    return this.value.interpolate(config);
  }
}
