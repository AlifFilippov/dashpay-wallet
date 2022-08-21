/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useMemo } from 'react';
import { State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {
  add,
  and,
  block,
  call,
  Clock,
  clockRunning,
  defined,
  cond,
  divide,
  eq,
  event,
  greaterThan,
  max,
  min,
  onChange,
  set,
  spring,
  startClock,
  stopClock,
  sub,
  Value,
} = Animated;

const SWIPE_DISTANCE = 20;
const ONCE = [];

const TRUE = 1;
const FALSE = 0;

type Config = {
  enabled?: boolean,
  onSwipeEnd?: Function,
  onSwipeStart?: Function,
};

function runSpring(clock, value, velocity, dist) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  };

  return [
    cond(
      clockRunning(clock),
      [set(config.toValue, dist)],
      [
        set(state.finished, 0),
        set(state.velocity, velocity),
        set(state.position, value),
        set(config.toValue, dist),
        startClock(clock),
      ],
    ),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
}

function interaction(onSwipeStart, onSwipeEnd, onSwiped) {
  const clock = new Clock();
  const state = new Value(State.UNDETERMINED);

  const dragX = new Value(0);
  const dragVX = new Value(0);

  const prevDragX = new Value(0);
  const currDragX = new Value(0);

  const outerWidth = new Value();
  const innerWidth = new Value();

  const isSwiping = new Value(FALSE);
  const isSwiped = new Value(FALSE);

  const handleGestureEvent = event([
    { nativeEvent: { translationX: dragX, velocityX: dragVX, state } },
  ]);

  const dist = sub(outerWidth, innerWidth);
  const center = divide(dist, 2);

  const snapPoint = cond(
    and(defined(outerWidth), defined(innerWidth), greaterThan(currDragX, center)),
    [set(isSwiped, TRUE), dist],
    [set(isSwiped, FALSE), 0],
  );

  const translateTmp = max(
    min(
      dist,
      block([
        cond(
          and(eq(state, State.ACTIVE)),
          [
            stopClock(clock),
            set(currDragX, add(currDragX, sub(dragX, prevDragX))),
            set(prevDragX, dragX),
            set(isSwiping, TRUE),
            currDragX,
          ],
          [
            set(prevDragX, 0),
            set(isSwiping, FALSE),
            set(currDragX, runSpring(clock, currDragX, dragVX, snapPoint)),
          ],
        ),
        onChange(
          isSwiping,
          call([isSwiping], ([value]) => {
            if (value === TRUE) {
              onSwipeStart();
            } else {
              onSwipeEnd();
            }
          }),
        ),
        onChange(
          isSwiped,
          call([isSwiped], ([value]) => {
            if (value === TRUE) {
              onSwiped();
            }
          }),
        ),
        currDragX,
      ]),
    ),
    0,
  );

  function handleOuterLayout(e) {
    const { width } = e.nativeEvent.layout;
    outerWidth.setValue(width);
  }

  function handleInnerLayout(e) {
    const { width } = e.nativeEvent.layout;
    innerWidth.setValue(width);
  }

  return {
    onOuterLayout: handleOuterLayout,
    onInnerLayout: handleInnerLayout,
    onGestureEvent: handleGestureEvent,
    translateX: translateTmp,
  };
}

function useSwipeable({
  onSwipeStart, onSwipeEnd, onSwiped, enabled,
}: Config) {
  const swipeable = useMemo(() => interaction(onSwipeStart, onSwipeEnd, onSwiped), ONCE);
  const {
    onOuterLayout, onInnerLayout, onGestureEvent, translateX,
  } = swipeable;

  const outer = {
    onLayout: onOuterLayout,
    style: {
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'flex-start',
    },
  };

  const bind = {
    maxPointers: 1,
    enabled,
    activeOffsetX: [-SWIPE_DISTANCE, SWIPE_DISTANCE],
    failOffsetY: [-SWIPE_DISTANCE, SWIPE_DISTANCE],
    onGestureEvent,
    onHandlerStateChange: onGestureEvent,
  };

  const inner = {
    onLayout: onInnerLayout,
    style: {
      transform: [
        {
          translateX,
        },
      ],
    },
  };

  return { outer, bind, inner };
}

export default useSwipeable;
