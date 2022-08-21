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

function FormattedDashValue(props: Props) {
  return <FormattedNumber {...props} />;
}

FormattedDashValue.defaultProps = {
  decimal: '.',
  grouping: ',',
  precision: 7,
};

export default FormattedDashValue;
