/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const LabeledSwitch = ({ label, value, onValueChange }: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  )
};

export default LabeledSwitch;
