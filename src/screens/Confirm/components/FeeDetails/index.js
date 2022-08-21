/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Text } from 'react-native';
import { FormattedNumber } from 'react-intl';

// Internal dependencies
import Icon from 'hooks/Icon';
import useStyles from './useStyles';

type Props = {
  dashAmount: number,
  fiatAmount: number,
};

function FeeDetails(props: Props) {
  const { dashAmount = 100, fiatAmount = 100 } = props;
  const styles = useStyles();

  const dashFee = 0.00002;
  const total = dashAmount + dashFee;
  return (
    <View style={styles.table}>
      <View style={styles.tbody}>
        <View style={styles.tcol}>
          <View style={styles.trow}>
            <Text style={styles.textMuted}>Dash</Text>
            <Text style={styles.textMuted}>USD</Text>
          </View>
          <View style={styles.trow}>
            <Text style={styles.textMuted}>Fee</Text>
            <Text style={styles.textActive}>Total</Text>
          </View>
        </View>
        <View style={[styles.tcol, { flex: 1 }]}>
          <View style={[styles.trow, { flex: 1 }]}>
            <View style={styles.inline}>
              <View style={styles.square}>
                <Icon style={styles.iconMuted} name="dash" />
              </View>
              <FormattedNumber value={dashAmount}>
                {number => <Text style={styles.textMuted}>{number}</Text>}
              </FormattedNumber>
            </View>
            <View style={styles.inline}>
              <View style={styles.square}>
                <Icon style={styles.iconMuted} name="usd" />
              </View>
              <FormattedNumber value={fiatAmount}>
                {number => <Text style={styles.textMuted}>{number}</Text>}
              </FormattedNumber>
            </View>
          </View>
          <View style={[styles.trow, { flex: 1 }]}>
            <View style={styles.inline}>
              <View style={styles.square}>
                <Icon style={styles.iconMuted} name="dash" />
              </View>
              <FormattedNumber value={dashFee} minimumFractionDigits={5} maximumFractionDigits={5}>
                {number => <Text style={styles.textMuted}>{number}</Text>}
              </FormattedNumber>
            </View>
            <View style={styles.inline}>
              <View style={styles.square}>
                <Icon style={styles.iconActive} name="dash" />
              </View>
              <FormattedNumber value={total} minimumFractionDigits={5} maximumFractionDigits={5}>
                {number => <Text style={styles.textActive}>{number}</Text>}
              </FormattedNumber>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FeeDetails;
