/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import Animated from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

// Internal dependencies
import useSwipeable from './useSwipeable';

type Props = {
  children: React.Node,
  enabled?: boolean,
  onSwipeStart?: Function,
  onSwipeEnd?: Function,
};

function Swipeable(props: Props) {
  const { children, ...rest } = props;
  const { outer, bind, inner } = useSwipeable(rest);
  return (
    <Animated.View {...outer}>
      <PanGestureHandler {...bind}>
        <Animated.View {...inner}>{children}</Animated.View>
      </PanGestureHandler>
    </Animated.View>
  );
}

Swipeable.defaultProps = {
  enabled: true,
  onSwipeStart() {},
  onSwipeEnd() {},
};

export default Swipeable;
