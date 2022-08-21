/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 */

// External dependencies
import { createContext } from 'react';

const FormContext = createContext();

export const FormProvider = FormContext.Provider;
export const FormConsumer = FormContext.Consumer;

export default FormContext;
