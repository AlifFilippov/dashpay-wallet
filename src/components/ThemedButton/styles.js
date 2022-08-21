/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = (theme) => StyleSheet.create({
  highlight: {
    padding: 5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.background
  },
  text: {
    color: theme.foreground,
    margin: 5
  }
});

export default styles;
