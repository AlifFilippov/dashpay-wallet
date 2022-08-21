// This file will be splitted in a few components and custom hooks.
/* eslint-disable */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import useTransition from './useTransition';
import styles from './styles';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  block,
  interpolate,
  concat,
} = Animated;

function useTransitionItems() {
  const [state, setState] = useState(() => {
    function onPressYes() {
      const items = state
        .filter(item => item.key === 'yes')
        .map(item => ({ ...item, showPulse: true }));
      setState(items);
    }

    function onPressNo() {
      const items = state
        .filter(item => item.key === 'no')
        .map(item => ({ ...item, showPulse: true }));
      setState(items);
    }

    return [
      {
        key: 'yes',
        label: 'Yes',
        onPress: onPressYes,
        primary: true,
      },
      {
        key: 'no',
        label: 'No',
        onPress: onPressNo,
        seconadry: true,
      },
    ];
  });

  return state;
}

function useValue(config) {
  const ref = useRef(null);

  function getObserver() {
    const observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    const newObserver = new Value(config);
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function useClock() {
  const ref = useRef(null);

  function getObserver() {
    const observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    const newObserver = new Clock();
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function useAnimation(callback) {
  const ref = useRef(null);

  function getObserver() {
    const observer = ref.current;
    if (observer !== null) {
      return observer;
    }
    const newObserver = callback();
    ref.current = newObserver;
    return newObserver;
  }

  return getObserver();
}

function runTiming(clock, value, dest) {
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
}

function Pulse({ opacity }) {
  const clock = useClock();
  const animation = useAnimation(() => runTiming(clock, -1, 1));

  return (
    <Animated.View
      style={{
        backgroundColor: '#000',
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        transform: [
          {
            translateX: interpolate(animation, {
              inputRange: [-1, 1],
              outputRange: [-300, 0],
            }),
          },
        ],
        opacity: interpolate(animation, {
          inputRange: [-1, 1],
          outputRange: [opacity, 0],
        }),
      }}
    />
  );
}

Pulse.propTypes = {
  opacity: PropTypes.number.isRequired,
};

function Item({
  item, index, length, runAnimation, animatedValue, onLeave,
}) {
  async function onLeaving() {
    const nextIndex = (index + 1) % length;
    await runAnimation(nextIndex);
    onLeave(item);
  }

  useEffect(
    () => {
      if (item.status === 'leaving') {
        onLeaving();
      }
    },
    [item.status],
  );

  const left = index - 0.5;
  const right = index + 0.5;
  const minWidth = 100 / length;

  const width = concat(
    interpolate(animatedValue, {
      inputRange: [left, index, right],
      outputRange: [minWidth, 100, minWidth],
      extrapolate: 'clamp',
    }),
    '%',
  );

  const zIndex = item.status === 'leaving' ? 1 : 2;

  const animatedStyles = index === 0
    ? {
      overflow: 'hidden',
      position: 'absolute',
      paddingLeft: 7.5,
      paddingRight: 7.5,
      top: 0,
      left: 0,
      bottom: 0,
      width,
      zIndex,
    }
    : {
      overflow: 'hidden',
      position: 'absolute',
      paddingLeft: 7.5,
      paddingRight: 7.5,
      top: 0,
      right: 0,
      bottom: 0,
      width,
      zIndex,
    };

  const styleName = item.primary === true ? 'primaryButton' : 'seconadryButton';
  const styleName2 = item.primary === true ? 'primaryButtonText' : 'seconadryButtonText';

  return (
    <Animated.View style={animatedStyles}>
      <TouchableOpacity style={styles[styleName]} onPress={item.onPress}>
        {item.showPulse && <Pulse opacity={item.primary === true ? 0.2 : 0.1} />}
        <Text style={styles[styleName2]}>{item.label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

Item.propTypes = {
  animatedValue: PropTypes.instanceOf(Animated.Value).isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  runAnimation: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  item: PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    primary: PropTypes.bool.isRequired,
  }).isRequired,
};

function Transition(props) {
  const transitionItems = useTransitionItems(props);
  const transition = useTransition(transitionItems);
  const [failed, setFailed] = useState(false);

  const animatedValue = useValue(0.5);

  function runAnimation(toValue = 1) {
    return new Promise((resolve) => {
      const animation = timing(animatedValue, {
        easing: Easing.inOut(Easing.ease),
        duration: 500,
        toValue,
      });

      animation.start(resolve);
    });
  }

  function handleLeave(item) {
    transition.onLeave(item);
    if (item.label === 'Yes') {
      props.onReject(props.sender.username).then(
        (res) => {
          if (res.type.endsWith('FAILURE')) {
            setFailed(true);
          }
        },
        () => {
          setFailed(true);
        },
      );
    } else {
      props.onAccept(props.sender.username).then(
        (res) => {
          if (res.type.endsWith('FAILURE')) {
            setFailed(true);
          }
        },
        () => {
          setFailed(true);
        },
      );
    }
  }

  function renderItem(item, index) {
    return (
      <Item
        item={item}
        key={item.key}
        index={index}
        length={transition.items.length}
        animatedValue={animatedValue}
        runAnimation={runAnimation}
        onLeave={handleLeave}
      />
    );
  }

  if (failed) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EAEBEC',
          borderColor: '#EAEBEC',
          borderRadius: 5,
          padding: 12,
        }}
      >
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#999999',
            fontSize: 16,
          }}
        >
          {'The request has failed.'}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: 'transparent',
        height: 40,
        marginLeft: -7.5,
        marginRight: -7.5,
      }}
    >
      {transition.items.map(renderItem)}
    </View>
  );
}

Transition.propTypes = {
  onReject: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  sender: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transition;
