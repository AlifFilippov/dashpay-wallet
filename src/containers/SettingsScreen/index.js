// @flow
import React from 'react';
import { View, Text } from 'react-native';
import connect from 'react-redux/es/connect/connect';
import { LabeledSwitch, ThemedButton } from 'components';
import styles from './styles';
import type { Props } from './types';

import selector from './selectors';
import actions from './actions';

const SettingsScreen = ({
  navigation: { navigate },
  balanceVisible,
  changeBalanceVisible,
}: Props) => (
  <View style={styles.container}>
    <Text style={styles.heading}>Settings</Text>
    <View style={styles.content}>
      <ThemedButton
        title="Languages"
        onPress={() => navigate('SettingsLanguageScreen')}
      />
      <ThemedButton
        title="Currency"
        onPress={() => navigate('SettingsAlternativeCurrencyScreen')}
      />
      <LabeledSwitch
        label="Balance in Navigation Bar"
        value={balanceVisible}
        onValueChange={changeBalanceVisible}
      />
    </View>
  </View>
);

export default connect(
  selector,
  actions,
)(SettingsScreen);
