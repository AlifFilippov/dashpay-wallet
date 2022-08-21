/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { useReducer, useEffect } from 'react';

// Internal dependencies
import reducers from './reducers';
import useMounted from './useMounted';
import yupToFormErrors from './utilities';
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

const options = {
  abortEarly: false,
  context: {},
};

function useForm(props) {
  const { initialState = {} } = props;

  const [state, dispatch] = useReducer(reducers, initialState);
  const isMounted = useMounted(false);

  const {
    touched = {},
    values = {},
    errors = {},
    focused = undefined,
    isDirty = false,
    isSubmitting = false,
    isValid = false,
    isValidating = false,
  } = state;

  async function validate() {
    try {
      dispatch({
        type: VALIDATE_REQUEST,
      });

      const schema = props.validationSchema(values);
      const response = await schema.validate(values, options);

      dispatch({
        type: VALIDATE_SUCCESS,
        payload: response,
      });

      return true;
    } catch (err) {
      dispatch({
        type: VALIDATE_FAILURE,
        payload: yupToFormErrors(err),
      });
      return false;
    }
  }

  useEffect(
    () => {
      if (!isSubmitting && isMounted) validate();
    },
    [values],
  );

  function setValues(data) {
    dispatch({
      type: SET_VALUES,
      payload: data,
    });
  }

  function setErrors(data) {
    dispatch({
      type: SET_ERRORS,
      payload: data,
    });
  }

  function setTouched(data) {
    dispatch({
      type: SET_TOUCHED,
      payload: data,
    });
  }

  function setFocused(data) {
    dispatch({
      type: SET_FOCUSED,
      payload: data,
    });
  }

  function reset(data = initialState) {
    dispatch({
      type: RESET,
      payload: data,
    });
  }

  async function submit() {
    dispatch({
      type: SUBMIT_REQUEST,
    });

    if (await validate()) {
      props.onSubmit(state.values);
      dispatch({
        type: SUBMIT_SUCCESS,
      });
    } else {
      dispatch({
        type: SUBMIT_FAILURE,
      });
    }

    return isValid;
  }

  return {
    touched,
    values,
    errors,
    focused,
    isDirty,
    isSubmitting,
    isValid,
    isValidating,
    reset,
    setTouched,
    setValues,
    setErrors,
    setFocused,
    submit,
  };
}

export default useForm;
