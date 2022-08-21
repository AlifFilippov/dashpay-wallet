/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import FormattedNumber from './Number';

type Props = {
  value: number,
  decimal?: string,
  grouping?: string,
  precision?: number,
};

function FormattedFiatValue(props: Props) {
  return <FormattedNumber {...props} />;
}

FormattedFiatValue.defaultProps = {
  decimal: '.',
  grouping: ',',
  precision: 2,
};

export default FormattedFiatValue;
