/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';

class FadeIn extends React.Component {
  static defaultProps = {
    duration: 300,
    toValue: 1
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      ...this.props,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { ...props } = this.props;
    props.style = {
      opacity: this.animatedValue
    };
    return <Animated.View {...props} />;
  }
}

export default FadeIn;
