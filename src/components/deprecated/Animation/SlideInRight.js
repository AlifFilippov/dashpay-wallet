/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';

class SlideInRight extends React.PureComponent {
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

  componentDidUpdate(prevProps) {
    if (prevProps.toValue !== this.props.toValue) {
      Animated.timing(this.animatedValue, {
        ...this.props,
        useNativeDriver: true
      }).start();
    }
  }

  render() {
    const style = this.props.style;
    const animatedStyle = { transform: [{ translateX: this.animatedValue }] };
    return <Animated.View {...this.props} style={[style, animatedStyle]} />;
  }
}

export default SlideInRight;
