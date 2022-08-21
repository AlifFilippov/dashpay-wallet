import { useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';

const {
  Clock, Value, set, cond, startClock, clockRunning, timing, block,
} = Animated;

function useAnimation(value, dest) {
  const [animation] = useState(() => {
    const clock = new Clock();
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0),
    };

    const config = {
      duration: 2000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease),
    };

    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ]),
      timing(clock, state, config),
      cond(state.finished, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ]),
      state.position,
    ]);
  });

  return animation;
}

export default useAnimation;
