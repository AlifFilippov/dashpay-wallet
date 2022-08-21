/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const SelectableList = ({ data, renderItem, onItemPress }: Props): ReactElement => {
  const renderItemContainer = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={ () => onItemPress(item) }>
      <View style={styles.itemContent}>
        { renderItem(item) }
      </View>
      <Text>{item.selected ? 'Selected' : ''}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList style={styles.container} data={data} renderItem={renderItemContainer}/>
  )
};

export default SelectableList;
