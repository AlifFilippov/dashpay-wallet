/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { CHANGE_SETTINGS } from './constants';

export const changeSettings = settings => ({
  type: CHANGE_SETTINGS,
  settings,
});

export const changeBalanceVisible = balanceVisible => changeSettings({ balanceVisible });
