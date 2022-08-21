/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export default {
  bounceIn(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
        outputRange: [0, 0, 0, 1, 0, 1]
      }),
      transform: [
        {
          scale: driver.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  },
  fadeIn(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };
  },
  fadeOut(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })
    };
  },
  fadeInUpBig(driver, layout) {
    return {
      opacity: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      transform: [
        {
          translateY: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [500, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  },
  slideDwon(driver, layout) {
    return {
      transform: [
        {
          translateY: driver.interpolate({
            inputRange: [0, 1],
            outputRange: [200, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  }
};
