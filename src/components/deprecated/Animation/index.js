/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated, Dimensions } from 'react-native';
import { View } from 'react-native';

export { default as SlideInRight } from './SlideInRight';

type Props = {};
type State = {};
type ReactElement = Element<*>;

const { height, width } = Dimensions.get('window');
const top = -(height / 2 - 64 - 12);
const bottom = height / 2 - 64 - 12;
const left = -(width / 2 - 64);
const right = width / 2 - 64;

const scaleOut = driver => ({
  opacity: driver.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  }),
  transform: [
    {
      scale: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.5]
      })
    }
  ]
});

const scaleIn = driver => ({
  opacity: driver.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  }),
  transform: [
    {
      scale: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1]
      })
    }
  ]
});

const moveDown = driver => ({
  backgroundColor: '#fff',
  borderRadius: 9,
  alignItems: 'center',
  justifyContent: 'center',
  height: 128,
  width: 128,
  transform: [
    {
      translateX: left
    },
    {
      translateY: driver.interpolate({
        inputRange: [0, 1],
        outputRange: [top, bottom]
      })
    }
  ]
});

const move = driver => {
  return {
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 128,
    width: 128,
    transform: [
      {
        translateX: driver.interpolate({
          inputRange: [0, 327],
          outputRange: [0, 320]
        })
      }
    ]
  };
};

function moveRight(aimatedValue) {
  return {
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 128,
    width: 128,
    transform: [
      {
        translateX: aimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [left, right]
        })
      },
      {
        translateY: bottom
      }
    ]
  };
}

function moveUp(aimatedValue) {
  return {
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 128,
    width: 128,
    transform: [
      {
        translateX: right
      },
      {
        translateY: aimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [bottom, top]
        })
      }
    ]
  };
}

function moveLeft(aimatedValue) {
  return {
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 128,
    width: 128,
    transform: [
      {
        translateX: aimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [right, left]
        })
      },
      {
        translateY: top
      }
    ]
  };
}

const animations = {
  move,
  moveDown,
  moveRight,
  moveUp,
  moveLeft,
  scaleIn,
  scaleOut
};

const defaultProps = {
  driver: TimingDriver,
  value: 1,
  style: {},
  animations,
  type: 'spring',
  animationConfig: {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true
  }
};

import { TimingDriver } from './TimingDriver';
export { TimingDriver };

import { SpringDriver } from './SpringDriver';
export { SpringDriver };

import { ScrollDriver } from './ScrollDriver';
export { ScrollDriver };
export { default as FadeIn } from './FadeIn';
export { default as Scale } from './Scale';

class Animation extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    Object.keys(props.animations).forEach(animationName => {
      (this: any)[animationName] = this.start.bind(this, animationName);
    });
    this.state = {};
  }

  getDriver() {
    const { driver } = this.props;
    return typeof driver === 'function' ? new driver({}) : driver;
  }

  start(animationName = '', animationConfig = {}) {
    return new Promise(resolve => {
      const driver = this.getDriver();
      const styles = [this.props.style];
      if (this.props.animations[animationName]) {
        styles.push(this.props.animations[animationName](driver));
      }
      this.setState({ styles }, () => {
        if (driver.toValue) {
          driver.toValue(this.props.value, resolve);
        }
      });
    });
  }

  render(): ReactElement {
    const { styles } = this.state;
    return <Animated.View {...this.props} style={styles} />;
  }
}

/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
export class Opacity extends React.Component {
  static defaultProps = {
    duration: 300,
    toValue: 1
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(props.toValue);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      ...this.props,
      useNativeDriver: true
    }).start();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.toValue !== prevProps.toValue) {
      Animated.timing(this.animatedValue, {
        ...this.props,
        useNativeDriver: true
      }).start();
    }
  }

  render() {
    const { ...props } = this.props;
    props.style = {
      opacity: this.animatedValue
    };
    return <Animated.View {...props} />;
  }
}

export { Animation };
