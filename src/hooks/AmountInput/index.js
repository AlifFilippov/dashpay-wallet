// @flow
import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import { injectIntl } from 'react-intl';
import { isNaN } from 'lodash';
import formatValue from './formatValue';
import type { Props } from './types';

function AmountInput(props: Props) {
  const {
    style,
    i18n,
    value,
    precision = 8,
    getRef,
  } = props;
  let input;
  const decimalSeparator = '.';

  const handleChange = (newValue: string = '') => {
    const matched = newValue
      .replace(/\((?=\d+)(.*)\)/, '-$1')
      .replace(new RegExp(`[^\\d${decimalSeparator}]`, 'g'), '')
      .match(new RegExp(`(\\d*)(\\${decimalSeparator}?)(\\d{0,${precision}})`));
    let unformatted = matched ? matched[0] : '';
    if (unformatted.endsWith(decimalSeparator)) return;
    unformatted = parseFloat(unformatted);
    unformatted = !isNaN(unformatted) ? unformatted : '';
    props.onChangeText(unformatted);
  };

  useEffect(() => {
    input.setNativeProps({
      text: formatValue(i18n, value, precision),
    });
  });

  return (
    <TextInput
      {...props}
      keyboardType="numeric"
      style={style}
      returnKeyType="done"
      value={undefined}
      placeholder="0.00"
      onChangeText={handleChange}
      type="money"
      options={{ precision }}
      ref={(ref) => {
        input = ref;
        if (getRef) {
          getRef(ref);
        }
      }}
    />
  );
}

export default injectIntl(AmountInput, { intlPropName: 'i18n' });
