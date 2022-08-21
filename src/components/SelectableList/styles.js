/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const theme = THEMES.vivid;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },

  itemContainer: {
    padding: 10,
    flexDirection: 'row',
  },

  itemContent: {
    flex: 1,
  },

  text: {
    color: theme.foreground,
    margin: 5,
    flex: 1,
  },
});

export default styles;
