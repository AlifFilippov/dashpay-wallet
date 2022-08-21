/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { variables } from 'constants';

import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const cardSize = (DEVICE_WIDTH + 3) / 3;

export default StyleSheet.create({
  card: {
    width: cardSize,
    height: cardSize,
    padding: 1.5
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 0,
    width: null,
    height: null
  },
  body: {
    backgroundColor: '#E0E0E0',
    borderRadius: 0,
    flex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 0,
    width: null,
    height: null
  },
  checkbox: {
    top: 4,
    position: 'absolute',
    right: 4
  }
});
