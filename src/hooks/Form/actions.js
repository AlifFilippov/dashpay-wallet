/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

import {
  SET_VALUES, SET_ERRORS, SET_TOUCHED, SET_FOCUSED,
} from './actionTypes';

export function setValues(values) {
  return {
    type: SET_VALUES,
    payload: values,
  };
}

export function setErrors(errors) {
  return {
    type: SET_ERRORS,
    payload: errors,
  };
}

export function setTouched(touched) {
  return {
    type: SET_TOUCHED,
    payload: touched,
  };
}

export function setFocused(focused) {
  return {
    type: SET_FOCUSED,
    payload: focused,
  };
}
