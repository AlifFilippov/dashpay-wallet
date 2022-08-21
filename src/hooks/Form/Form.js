/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import React from 'react';

// Internal dependencies
import FormProvider from './FormProvider';
import useForm from './useForm';

function Form(props) {
  const form = useForm(props);
  return <FormProvider value={form} {...props} />;
}

export default Form;
