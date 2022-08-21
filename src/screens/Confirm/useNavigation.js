/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
import { useMemo, useEffect, useCallback } from 'react';

import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;
export const DURATION = 1000;

// This file should be deleted when we migrate to the new navigation library.
// The current navigation library does not expose the animated value.
function useNavigation(props) {
  const { navigation } = props;
  const { params = {} } = navigation.state;

  const animatedValue = useMemo(() => new Value(0));
  const anim1 = useMemo(() => timing(animatedValue, {
    duration: DURATION,
    toValue: 1,
    easing: Easing.inOut(Easing.ease),
  }));

  const anim2 = useMemo(() => timing(animatedValue, {
    duration: DURATION,
    toValue: 0,
    easing: Easing.inOut(Easing.ease),
  }));

  useEffect(() => {
    anim1.start();
  }, []);

  const goBack = useCallback(() => {
    anim2.start(({ finished }) => {
      if (finished) {
        props.navigation.goBack();
      }
    });
  }, []);

  return {
    animatedValue,
    goBack,
    params,
  };
}

export default useNavigation;
