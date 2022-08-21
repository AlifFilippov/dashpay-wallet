// @flow

import * as React from 'react';
import { FlatList } from 'react-navigation';

import View from 'components/View';
import Text from 'components/Text';
import TransactionCard from './components/TransactionCard';
import styles from './styles';

type Props = { data: object };

function Transactions(props: Props) {
  const { data } = props;
  return (
    <FlatList
      data={data}
      style={{ flex: 1 }}
      keyExtractor={(item, index) => `receive-${index}`}
      renderItem={item => <TransactionCard {...item} />}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <Text style={styles.text}>No transactions.</Text>
        </View>
      )}
    />
  );
}

export default Transactions;
