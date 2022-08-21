import { createSelector } from 'reselect';
import { mnemonicSelector, usernameSelector } from 'state/account/selectors';

export default createSelector(
  mnemonicSelector,
  usernameSelector,
  (mnemonic, username) => ({
    mnemonic,
    username,
  }),
);
