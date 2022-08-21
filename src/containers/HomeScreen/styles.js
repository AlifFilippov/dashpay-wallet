/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['container']: {
    position: 'relative',
    backgroundColor: '#088BE2',
    borderColor: '#088BE2',
    flex: 1
  },
  ['slideUp']: {
    position: 'relative',
    paddingTop: 32,
    paddingLeft: 32,
    paddingRight: 32
  },
  ['navBar']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  ['logo']: {
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 32,
    marginBottom: 16,
    width: 190,
    height: 70
  },
  ['buttonGroup']: {
    marginTop: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    minWidth: '50%'
  }
});
