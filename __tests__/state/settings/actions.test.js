import { CHANGE_SETTINGS } from 'state/settings/constants';
import { changeSettings } from 'state/settings/actions';

describe('settings actions', () => {
  it('should create an action to set the new settings', () => {
    const settings = { balanceVisible: true };
    const expectedAction = {
      settings,
      type: CHANGE_SETTINGS,
    };
    expect(changeSettings(settings)).toEqual(expectedAction);
  });
});
