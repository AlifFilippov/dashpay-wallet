// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert, TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import Button from 'components/Button';
import { PROFILE_STATES } from 'state/profiles/constants';
import actions from './actions';
import type { Props } from './types';

const ProfileActionButton = ({
  username,
  state,
  sendContactRequest,
  acceptContactRequest,
}: Props) => {
  const [disabled, setDisabled] = useState(state === PROFILE_STATES.REQUEST_SENT);
  let action;
  let label;
  switch (state) {
    case PROFILE_STATES.REQUEST_RECEIVED:
      label = 'Accept request';
      action = () => acceptContactRequest(username)
        .then(
          () => Alert.alert('Contact request accepted'),
          error => Alert.alert(`Error: ${error.message}`),
        );
      break;
    case PROFILE_STATES.REQUEST_SENT:
      label = 'Request sent';
      break;
    case PROFILE_STATES.CONTACT:
      return null;
    default:
      label = 'Send request';
      action = () => sendContactRequest(username)
        .then(
          () => Alert.alert('Contact request sent'),
          error => Alert.alert(`Error: ${error.message}`),
        );
      break;
  }

  const handleSubmit = () => {
    setDisabled(true);
    action();
  };

  return (
    <Button disabled={disabled} onPress={handleSubmit}>
      {({ bind, styles }) => (
        <TouchableOpacity disabled={disabled} style={styles.container} {...bind}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      )}
    </Button>
  );
};

export default connect(null, actions)(ProfileActionButton);
