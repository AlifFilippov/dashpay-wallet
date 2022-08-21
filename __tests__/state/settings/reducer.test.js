/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { CHANGE_SETTINGS } from 'state/settings/constants';
import reducer from 'state/settings/reducer';

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ balanceVisible: false });
  });

  it('should handle CHANGE_SETTINGS', () => {
    const settings = { balanceVisible: true };
    expect(reducer(undefined, { type: CHANGE_SETTINGS, settings })).toEqual(settings);
  });
});
