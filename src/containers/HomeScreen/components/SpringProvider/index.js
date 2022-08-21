/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Animated } from 'react-native';

export const {
  Provider: AnimationProvider,
  Consumer: AnimationConsumer
} = React.createContext();

// Internal dependencies

class SpringProvider extends React.Component<any, any> {
  static defaultProps = {
    useNativeDriver: true,
    duration: 2000,
    // friction: 280,
    // tension: 280,
    toValue: 1
  };

  constructor(props: Props) {
    super(props);

    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.runAnimation();
  }

  componentDidUpdate(prevProps) {
    const { toValue: prevToValue } = prevProps;
    const { toValue: nextToValue } = this.props;

    if (prevToValue !== nextToValue) {
      this.runAnimation();
    }
  }

  handleAnimationEnd(event) {
    this.props.onAnimationEnd(event);
  }

  runAnimation(config) {
    config = Object.assign({}, this.props, config);
    Animated.timing(this.animatedValue, config)
      .start(this.handleAnimationEnd);
  }

  render(): React.Element<any> {
    return <AnimationProvider {...this.props} value={this.animatedValue} />;
  }
}

export default SpringProvider;
