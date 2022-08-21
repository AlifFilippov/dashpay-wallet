import { createSelector } from 'reselect';
import { settingsSelector } from 'state/settings/selectors';

export default createSelector(
  settingsSelector, ({ balanceVisible }) => ({ balanceVisible }),
);
