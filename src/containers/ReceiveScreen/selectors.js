// @flow

import { createSelector } from 'reselect';

export const selectState = (state) => {
  const {
    account: { unusedAddress },
  } = state;
  return { unusedAddress };
};

const selector = createSelector(
  selectState,
  obj => obj,
);

export default selector;
