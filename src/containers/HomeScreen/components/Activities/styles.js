/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ['contentContainerStyle']: {
    flexGrow: 1,
    padding: 24
  },
  ['container']: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  ['text']: {
    fontSize: 16
  },
  ['button']: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  ['buttonIcon']: {
    fontSize: 21,
    color: '#fff'
  },
  ['buttonText']: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 12
  }
});

export default styles;
