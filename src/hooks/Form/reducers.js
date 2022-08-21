/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import { mapValues } from 'lodash';

// Internal dependencies
import { combineReducers } from 'utilities';
import {
  SET_TOUCHED,
  SET_VALUES,
  SET_ERRORS,
  SET_FOCUSED,
  VALIDATE_REQUEST,
  VALIDATE_SUCCESS,
  VALIDATE_FAILURE,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
  SUBMIT_FAILURE,
  RESET,
} from './actionTypes';

function touched(state = {}, action) {
  switch (action.type) {
    case SET_TOUCHED:
    case SET_VALUES:
    case SET_ERRORS:
      return Object.assign({}, state, mapValues(action.payload, () => true));

    case RESET:
      return {};

    default:
      return state;
  }
}

function values(state = {}, action) {
  switch (action.type) {
    case SET_VALUES:
      return Object.assign({}, state, action.payload);

    case RESET:
      return action.payload;

    default:
      return state;
  }
}

function errors(state = {}, action) {
  switch (action.type) {
    case SET_ERRORS:
      return Object.assign({}, state, action.payload);

    case VALIDATE_SUCCESS:
      return {};

    case RESET:
      return {};

    case VALIDATE_FAILURE:
      return action.payload;

    default:
      return state;
  }
}

function focused(state = '', action) {
  switch (action.type) {
    case SET_FOCUSED:
      return action.payload;

    case RESET:
      return '';

    default:
      return state;
  }
}

function isDirty(state = false, action) {
  switch (action.type) {
    case SET_TOUCHED:
    case SET_VALUES:
    case SET_ERRORS:
      return true;

    default:
      return state;
  }
}

function isSubmitting(state = false, action) {
  switch (action.type) {
    case SUBMIT_REQUEST:
    case SUBMIT_SUCCESS:
    case SUBMIT_FAILURE:
      return SUBMIT_REQUEST === action.type;

    default:
      return state;
  }
}

function isValidating(state = false, action) {
  switch (action.type) {
    case VALIDATE_REQUEST:
    case VALIDATE_SUCCESS:
    case VALIDATE_FAILURE:
      return VALIDATE_REQUEST === action.type;

    default:
      return state;
  }
}

function isValid(state = false, action) {
  switch (action.type) {
    case VALIDATE_SUCCESS:
      return true;

    case VALIDATE_FAILURE:
      return false;

    default:
      return state;
  }
}

export default combineReducers({
  touched,
  values,
  focused,
  errors,
  isDirty,
  isValidating,
  isValid,
  isSubmitting,
});
