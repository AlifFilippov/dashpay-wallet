/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { COLORS, LENGTHS } from 'constants';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: LENGTHS.borderRadius,
    borderTopRightRadius: LENGTHS.borderRadius,
  },
  cardTitle: {
    color: 'white',
  },
  header: {
    padding: LENGTHS.screenPadding,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: LENGTHS.headingFontSize
  },
  dummyPage: {
    backgroundColor: 'gray',
    flex: 1,
  }
});
