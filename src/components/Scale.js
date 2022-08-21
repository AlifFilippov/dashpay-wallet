/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';

class Scale extends React.Component {
  static defaultProps = {
    tension: 120,
    friction: 21,
    velocity: 2,
    toValue: 1
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(props.toValue);
  }

  componentDidUpdate() {
    Animated.spring(this.animatedValue, {
      ...this.props,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { ...props } = this.props;
    props.style = {
      transform: [{ scale: this.animatedValue }]
    };
    return <Animated.View {...props} />;
  }
}

export default Scale;
