/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: THEMES.vivid.background,
    justifyContent: 'center',
    flex: 1
  },
  text: {
    justifyContent: 'center'
  },
  bold:{
    fontWeight: 'bold'
  },
  qrWrapper: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  }
});

export default styles;
