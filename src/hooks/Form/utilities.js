/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

function yupToFormErrors(yupErrors) {
  const errors = {};

  if (yupErrors.inner.length === 0) {
    return {
      [yupErrors.path]: yupErrors.message,
    };
  }

  yupErrors.inner.forEach((error) => {
    errors[error.path] = error.message;
  });

  return errors;
}

export default yupToFormErrors;
