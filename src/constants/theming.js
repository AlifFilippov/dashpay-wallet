/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import COLORS from './colors';

export default {
  light: {
    foreground: COLORS.blueDark,
    background: COLORS.white
  },
  vivid: {
    foreground: COLORS.white,
    background: COLORS.blue
  },
  dim: {
    foreground: COLORS.white,
    background: COLORS.blueDim
  },
  dark: {
    foreground: COLORS.white,
    background: COLORS.blueDark
  }
};

export type Theme = {
  foreground: string,
  background: string
}
