// @flow

import * as React from 'react';
import { Animated } from 'react-native';

type Props = {
  style: array,
  fromValue: number,
  toValue: number,
  duration?: number,
};

class SlideInUp extends React.PureComponent<Props> {
  static defaultProps = {
    duration: 400,
  };

  constructor(props: Props) {
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
    const { toValue } = this.props;
    if (prevProps.toValue !== toValue) {
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

export default SlideInUp;
