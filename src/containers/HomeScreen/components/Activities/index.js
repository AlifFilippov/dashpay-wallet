// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-navigation';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';
import TransactionCard from 'hooks/Card/Transaction';

import SocialTransactionCard from './components/TransactionCard';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
import type { Props, RenderItemProps } from './types';


const Transactions = (props: Props) => {
  const {
    acceptContactRequest,
    rejectContactRequest,
    activity,
    navigation,
  } = props;

  const renderItem = ({ item: { type, data } }: RenderItemProps) => {
    switch (type) {
      case 'social':
        return (
          <SocialTransactionCard
            acceptContactRequest={acceptContactRequest}
            rejectContactRequest={rejectContactRequest}
            item={data}
          />
        );
      case 'wallet':
        return <TransactionCard {...data} />;
      default:
        return null;
    }
  };

  const keyExtractor = ({ type, data }) => (
    type === 'social' ? `${data.username}${data.state}` : data.txid
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={activity}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <Text style={styles.text}>No transactions</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Activities')}>
            <Icon style={styles.buttonIcon} name="activity" />
            <Text style={styles.buttonText}>See All Activity</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default connect(
  selector,
  actions,
)(Transactions);
