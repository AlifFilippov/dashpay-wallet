/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { StyleSheet } from 'react-native';
import { COLORS } from 'constants';

// import { THEMES } from 'constants';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: `${COLORS.blueDark}7F`, // TODO this will break if colors are expressed differently
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 40,
  },
  containerContainer: {
    paddingTop: 25,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
    elevation: 4,
  },
  avatarContainer: {
    position: 'absolute',
    top: -25,
    marginHorizontal: 'auto',
    padding: 4,
    borderRadius: 52,
    backgroundColor: COLORS.white,
  },
  topAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
  },
  fiatBeforeFee: {
    fontSize: 30,
  },
  inset: {
    width: '100%',
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  insetHeader: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  insetValue: {
    marginBottom: 5,
    opacity: 0.6,
  },
  totalText: {
    color: COLORS.blue,
    fontSize: 20,
  },
  totalFiat: {
    color: COLORS.blue,
    fontSize: 30,
    marginBottom: 10,
  },
  footer: {
    width: '100%',
    backgroundColor: COLORS.blue,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 4,
  },
  chevron: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLORS.white,
  },
  address: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 10,
    color: COLORS.white,
    fontSize: 12,
  },
  swipeArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: 33, // 50 / 2 + 8
    padding: 8,
    backgroundColor: '#0000003F',
  },
  swipeMovablePart: {
    position: 'relative',
    zIndex: 2,
  },
  swipeAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  swipeText: {
    color: COLORS.white,
    marginVertical: 'auto',
  },
});

export default styles;
