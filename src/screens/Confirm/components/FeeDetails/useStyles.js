/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  table: {
    overflow: 'hidden',
  },
  tbody: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: -2,
  },
  tcol: {},
  trow: {
    alignSelf: 'stretch',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 0.5,
    padding: 8,
    height: 56,
  },
  textMuted: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.25)',
    lineHeight: 20,
  },
  iconMuted: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.25)',
    lineHeight: 20,
  },
  iconActive: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
  textActive: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.75)',
    lineHeight: 20,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
});

export default makeStyles(styles);
