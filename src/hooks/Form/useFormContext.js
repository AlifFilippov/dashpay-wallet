/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import { useContext } from 'react';

// Internal dependencies
import FormContext from './FormContext';

function useFormContext() {
  return useContext(FormContext);
}

export default useFormContext;
