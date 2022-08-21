/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

class SlideInDown extends React.PureComponent {
  static defaultProps = {
    fromValue: 0,
    toValue: 1,
    delay: 400,
    duration: 400,
    style: {},
  };

  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      ...this.props,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  componentDidUpdate(prevProps) {
    const { toValue: nextToValue } = this.props;
    const { toValue: prevToValue } = prevProps;
    if (nextToValue !== prevToValue) {
      Animated.timing(this.animatedValue, {
        ...this.props,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const { style, fromValue } = this.props;
    const animatedStyle = {
      overflow: 'hidden',
      opacity: this.animatedValue,
      transform: [
        {
          translateY: this.animatedValue.interpolate({
            outputRange: [fromValue, 0],
            inputRange: [0, 1],
          }),
        },
      ],
    };
    return <Animated.View {...this.props} style={[style, animatedStyle]} />;
  }
}

SlideInDown.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number,
  fromValue: PropTypes.number,
  toValue: PropTypes.number,
  style: PropTypes.oneOf([PropTypes.number, PropTypes.object]),
};

export default SlideInDown;
