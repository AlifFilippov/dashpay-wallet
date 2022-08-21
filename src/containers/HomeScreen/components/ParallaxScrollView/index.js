/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Animated } from 'react-native';

// Internal dependencies
import View from 'components/View';

class ParallaxScrollView extends React.Component<any, any> {
  constructor(props: Props) {
    super(props);
    this.scrollY = new Animated.Value(0);

    this.state = {
      height: 0
    };
  }

  _onLayout = event => {
    const { height: prevHeight } = this.state;
    const { height: nextHeight } = event.nativeEvent.layout;

    if (prevHeight !== nextHeight) {
      this.setState({ height: nextHeight });
    }
  };

  render(): React.Element<any> {
    const { height } = this.state;
    const animatedStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      opacity: this.scrollY.interpolate({
        inputRange: [0, 600],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      }),
      transform: [
        {
          translateY: this.scrollY.interpolate({
            inputRange: [0, 600],
            outputRange: [0, 300],
            extrapolate: 'clamp'
          })
        }
      ]
    };
    return (
      <Animated.ScrollView
        contentContainerStyle={{
          position: 'relative',
          flexGrow: 1
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: this.scrollY } } }
        ])}>

        <View style={{ height }} />
        {this.props.renderBody(this.scrollY)}
        <Animated.View style={animatedStyle} onLayout={this._onLayout}>
          {this.props.renderHeader(this.scrollY)}
        </Animated.View>
      </Animated.ScrollView>
    );
  }
}

export default ParallaxScrollView;
