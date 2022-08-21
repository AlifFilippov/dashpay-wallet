/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';
import { LENGTHS } from 'constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: LENGTHS.screenPadding,
    flex: 1
  },
  header: {
    color: THEMES.vivid.foreground,
    fontSize: LENGTHS.headingFontSize,
    marginBottom: LENGTHS.screenPadding,
  },
  desc: {
    color: THEMES.vivid.foreground,
    fontSize: 22,
    marginBottom: LENGTHS.screenPadding,
  },
  navButton: {
    marginTop: LENGTHS.screenPadding,
  }
});

export default styles;
