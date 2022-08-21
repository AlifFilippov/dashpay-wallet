/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';
import { TransitionConfig } from 'react-navigation';
import NavBar from 'components/NavBar';

function getSceneIndicesForInterpolationInputRange(props) {
  const { scene, scenes } = props;
  const { index } = scene;
  const lastSceneIndexInScenes = scenes.length - 1;
  const isBack = !scenes[lastSceneIndexInScenes].isActive;

  if (isBack) {
    const currentSceneIndexInScenes = scenes.findIndex(item => item === scene);
    const targetSceneIndexInScenes = scenes.findIndex(item => item.isActive);
    const targetSceneIndex = scenes[targetSceneIndexInScenes].index;
    const lastSceneIndex = scenes[lastSceneIndexInScenes].index;

    if (index !== targetSceneIndex && currentSceneIndexInScenes === lastSceneIndexInScenes) {
      return {
        first: Math.min(targetSceneIndex, index - 1),
        last: index + 1,
      };
    }
    if (index === targetSceneIndex && currentSceneIndexInScenes === targetSceneIndexInScenes) {
      return {
        first: index - 1,
        last: Math.max(lastSceneIndex, index + 1),
      };
    }
    if (index === targetSceneIndex || currentSceneIndexInScenes > targetSceneIndexInScenes) {
      return null;
    }
    return { first: index - 1, last: index + 1 };
  }
  return { first: index - 1, last: index + 1 };
}

function forInitial(props) {
  const { navigation, scene } = props;

  const focused = navigation.state.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [{ translateX: translate }, { translateY: translate }],
  };
}

function forVertical(props) {
  const { layout, position, scene } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }
  const interpolate = getSceneIndicesForInterpolationInputRange(props);

  if (!interpolate) return { opacity: 0 };

  const { first, last } = interpolate;
  const { index } = scene;
  const opacity = position.interpolate({
    inputRange: [first, first + 0.01, index, last - 0.01, last],
    outputRange: [0, 1, 1, 0.85, 0],
  });

  const scale = position.interpolate({
    inputRange: [first, first + 0.01, index, last - 0.01, last],
    outputRange: [0, 1, 1, 0.85, 0],
  });

  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [first, index, last],
    outputRange: [height, 0, 0],
  });
  const translateX = 0;

  return {
    opacity,
    transform: [{ translateX }, { translateY }, { scale }],
  };
}

const TransitionSpec = {
  timing: Animated.spring,
  stiffness: 1000,
  damping: 500,
  mass: 3,
};

const SlideFromBottom = {
  transitionSpec: TransitionSpec,
  screenInterpolator: forVertical,
  containerStyle: {
    backgroundColor: '#000',
  },
};

function transitionConfig(): TransitionConfig {
  return SlideFromBottom;
}

const config = {
  transitionConfig,
  mode: 'card',
  cardStyle: {
    backgroundColor: '#fff',
  },
  containerStyle: {
    backgroundColor: '#fff',
  },
  defaultNavigationOptions: {
    header: props => <NavBar {...props} />,
  },
};

export default config;
