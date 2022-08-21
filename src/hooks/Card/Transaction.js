// @flow
import React from 'react';
import { View } from 'react-native';
import Avatar from 'hooks/Avatar';
import DashValue from 'hooks/Formatted/DashValue';
import FiatValue from 'hooks/Formatted/FiatValue';
import RelativeTime from 'hooks/Formatted/RelativeTime';
import Text from 'hooks/Typography/Text';
import Icon from 'hooks/Icon';
import useTranslate from 'hooks/Translate';
import type { Transaction } from 'state/transactions/types';
import { getTitle, getSubtitle, getAddress } from './helpers';
import useStyles from './useStyles';

function TransactionCard(props: Transaction) {
  const translate = useTranslate();
  const styles = useStyles(props);

  const {
    sender, receiver, type, conversion, timestamp, ...rest
  } = props;

  const { amount: dashAmount, currency: dashCurrency } = rest;
  const { amount: fiatAmount, currency: fiatCurrency } = conversion;

  const title = getTitle(translate, sender);
  const subtitle = getSubtitle(translate, type, receiver);
  const address = getAddress(translate, type, sender, receiver);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Avatar user={sender} xs />
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.inner}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Avatar user={receiver} sm inverse />
            </View>
            <View style={styles.col}>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Icon style={styles.icon} name={fiatCurrency} />
                </View>
                <View style={styles.col}>
                  <Text style={styles.text}>
                    <FiatValue value={fiatAmount} />
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Icon style={styles.icon} name={dashCurrency} />
                </View>
                <View style={styles.col}>
                  <Text style={styles.text}>
                    <DashValue value={dashAmount} />
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.divider} />
        <Text style={styles.timestamp}>
          <RelativeTime value={timestamp} />
        </Text>
      </View>
    </View>
  );
}

function areEqual(prevProps, nextProps) {
  // Rerender only if the user changes the currency.
  return prevProps.conversion.amount && nextProps.conversion.amount;
}

export default React.memo(TransactionCard, areEqual);
