// @flow
import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';

import TransactionCard from 'hooks/Card/Transaction';
import TXTYPES from 'constants/txtypes';
import RadioRow from 'components/RadioRow';
import Icon from 'hooks/Icon';

import selectors from './selectors';
import styles from './styles';

type Props = {
  transactions: Array<Object>,
}
type ItemProps = {
  item: Object,
}

const FILTERS = {
  ALL: { title: 'All Transactions', types: [TXTYPES.SENT, TXTYPES.RECEIVED] },
  SENT: { title: 'Paid Transactions', types: [TXTYPES.SENT] },
  RECEIVED: { title: 'Received Transactions', types: [TXTYPES.RECEIVED] },
};

const EmptyList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No transactions</Text>
  </View>
);

const Transactions = ({ transactions }: Props) => {
  const [filter, setFilter] = useState(FILTERS.ALL);

  const filteredTransactions = useMemo(
    () => transactions.filter(({ type }) => filter.types.includes(type)),
    [transactions, filter],
  );

  const renderItem = ({ item }: ItemProps) => <TransactionCard {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredTransactions}
        keyExtractor={({ txid }) => `transactioncard-${txid}`}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1, padding: 0, margin: 0 }}
        ListEmptyComponent={EmptyList}
        ListHeaderComponent={(
          <View style={styles.header}>
            <View style={styles.circle}>
              <Icon style={styles.icon} name="squiggle" />
            </View>
            <Text style={styles.title}>{filter.title}</Text>
          </View>
        )}
      />
      <RadioRow
        options={[
          { value: 'Show All', key: FILTERS.ALL },
          { value: 'Paid', key: FILTERS.SENT },
          { value: 'Received', key: FILTERS.RECEIVED },
        ]}
        initialOption="Show All"
        action={key => setFilter(key)}
      />
    </View>
  );
};

export default connect(selectors)(Transactions);
