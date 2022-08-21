/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useMemo } from 'react';

// Internal dependencies
import formatNumber from 'libraries/format-number';
import Text from 'hooks/Typography/Text';

type Props = {
  value: number,
  decimal: string,
  grouping: string,
  precision: number,
};

function FormattedNumber({
  value, precision, decimal, grouping,
}: Props) {
  const formattedNumber = useMemo(() => formatNumber(value, precision, decimal, grouping), [value]);

  return <Text>{formattedNumber}</Text>;
}

export default FormattedNumber;
