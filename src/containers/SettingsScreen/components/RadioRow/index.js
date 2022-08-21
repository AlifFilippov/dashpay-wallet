/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from 'react-native';
import { ThemedButton } from 'components';

import { THEMES } from 'constants';

// import type { ReactElement } from './types';
// import type { Props } from './types';
// import type { State } from './types';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row'
  }
});

export const RadioRow = ({options, currentOption, action}) =>
  <View style={styles.buttonRow}>{
    options.map(
      option => <ThemedButton
        key={ option.key }
        title={ option.value }
        onPress={ action(option.key) }
        theme={ option.key === currentOption ? THEMES.light : THEMES.vivid }
      />
    )
  }</View>;
