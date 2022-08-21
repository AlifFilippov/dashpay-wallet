import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { range } from 'lodash';
import useAnimation from './useAnimation';
import useStyles from './useStyles';

const { interpolate } = Animated;

function Dots() {
  const animation = useAnimation(0, 6);
  const styles = useStyles();
  return (
    <View style={styles.dots}>
      {range(6).map((item, index) => {
        const first = index - 1;
        const last = index + 1;

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                opacity: interpolate(animation, {
                  inputRange: [first, index, last],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp',
                }),
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export default Dots;
