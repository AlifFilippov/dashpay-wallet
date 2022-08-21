/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { Animated } from 'react-native';

// Internal dependencies
import { AnimationConsumer } from '../SpringProvider';

function FadeIn(props: Props): React.Element<any> {
  return (
    <AnimationConsumer>
      {animatedValue => (
        <Animated.View
          {...props}
          style={[
            props.style,
            {
              opacity: animatedValue.interpolate({
                inputRange: props.inputRange,
                outputRange: props.outputRange,
                extrapolate: 'clamp'
              })
            }
          ]}
        />
      )}
    </AnimationConsumer>
  );
}

export default FadeIn;
