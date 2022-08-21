/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { THEMES } from 'constants';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const ThemedButton = ({ title, onPress, theme }: Props): ReactElement => {
  computedStyle = styles(theme || THEMES.vivid);
  return (
    <TouchableHighlight
      style={computedStyle.highlight}
      underlayColor="transparent"
      onPress={onPress}>
      <View style={computedStyle.container}>
        <Text style={computedStyle.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
};

export default ThemedButton;
