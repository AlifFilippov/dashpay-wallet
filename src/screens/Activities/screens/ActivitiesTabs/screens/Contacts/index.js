// @flow
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import ContactList from 'hooks/ContactList';
import ContactItem from './ContactItem';
import selectors from './selectors';
import actions from './actions';

type Props = {
  acceptContactRequest: Function,
  rejectContactRequest: Function,
};

const Contacts = (props: Props) => {
  const keyExtractor = item => item.id;

  const renderItem = useCallback(
    ({ item }) => (
      <ContactItem
        {...item}
        onAccept={props.acceptContactRequest}
        onReject={props.rejectContactRequest}
      />
    ),
    [],
  );

  return (
    <ContactList
      {...props}
      title="All Contacts"
      icon="squiggle"
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default connect(selectors, actions)(Contacts);
