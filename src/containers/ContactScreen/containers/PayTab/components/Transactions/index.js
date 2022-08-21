// @flow

// External dependencies
import * as React from 'react';
import { FlatList } from 'react-navigation';

// Internal dependencies
import TransactionCard from './components/TransactionCard';

type Props = { data: object };

function Transactions(props: Props) {
  const { data } = props;
  return (
    <FlatList
      data={data}
      style={{ flex: 1 }}
      keyExtractor={(item, index) => `pay-${index}`}
      renderItem={item => <TransactionCard {...item} />}
    />
  );
}

export default Transactions;
