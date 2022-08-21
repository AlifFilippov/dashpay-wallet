/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  progress: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    height: 10,
    position: 'relative'
  },
  progressBar: {
    backgroundColor: '#fff',
    borderRadius: 0,
    height: 8,
  }
});

export default styles;
