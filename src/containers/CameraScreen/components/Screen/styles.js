/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ['container']: {
    flexDirection: 'column',
    backgroundColor: '#000',
    borderColor: '#000',
    flex: 1
  },
  ['camera']: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ['header']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  ['body']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flex: 1
  },
  ['footer']: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32
  },
  ['left']: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  ['right']: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  ['button']: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 48,
    minWidth: 48,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ['buttonIcon']: {
    width: 18,
    fontSize: 17,
    textAlign: 'center',
    color: '#fff'
  },
  ['buttonFormattedText']: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff'
  },
  ['buttonText']: {
    width: 18,
    height: 18,
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 9,
    lineHeight: 18,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  ['captureButton']: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 32,
    height: 64,
    width: 64
  },
  ['captureButtonInner']: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 24,
    height: 48,
    width: 48
  }
});
