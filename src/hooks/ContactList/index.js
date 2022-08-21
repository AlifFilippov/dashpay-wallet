/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { FlatList } from 'react-navigation';

// Internal dependencies
import Icon from 'hooks/Icon';
import ListEmpty from './ListEmpty';
import useStyles from './useStyles';

function ContactList(props) {
  const { title, icon } = props;
  const styles = useStyles();

  const listHeader = (
    <View style={styles.header}>
      <View style={styles.circle}>
        <Icon style={styles.icon} name={icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      ListHeaderComponent={listHeader}
      {...props}
    />
  );
}

ContactList.defaultProps = {
  ListEmptyComponent: ListEmpty,
};

ContactList.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ListEmptyComponent: PropTypes.node,
};

export default ContactList;
