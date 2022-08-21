import { createSelector } from 'reselect';

export const accountSelector = ({ account }) => account;

export const balanceSelector = createSelector(
  accountSelector,
  ({ balance }) => balance,
);

export const mnemonicSelector = createSelector(
  accountSelector,
  ({ mnemonic }) => mnemonic,
);

export const usernameSelector = createSelector(
  accountSelector,
  ({ username }) => username,
);

export const currentUserSelector = createSelector(
  accountSelector,
  ({ username }) => ({
    username,
  }),
);

export const dpaIsInitializedSelector = createSelector(
  accountSelector,
  ({ dpaIsInitialized }) => dpaIsInitialized,
);
