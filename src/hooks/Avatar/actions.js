/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */
const FAILURE = 'FAILURE';
const RESET = 'RESET';

const actions = {
  imageError(payload) {
    return {
      type: FAILURE,
      payload,
    };
  },
  reset(payload) {
    return {
      type: RESET,
      payload,
    };
  },
};

export default actions;
