/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @prettier-ignore
 * @flow
 */
import { StyleSheet } from 'react-native';
import { variables } from 'constants';

export default StyleSheet.create({
  ['cameraButton']: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#053273',
    borderColor: '#053273',
    borderWidth: 0,
    borderRadius: 32,
    height: 64,
    width: 64
  },
  ['cameraIcon']: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 35
  }
});
