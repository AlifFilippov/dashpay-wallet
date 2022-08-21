// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import {
  View,
  TouchableOpacity,
  Text,
} from 'components';
import { PROFILE_STATES } from 'state/profiles/constants';
import type { Props } from './types';
import styles from './styles';

// TODO: we should agree on translation solution and
//       start using i18n files
const t = (state) => {
  if ([PROFILE_STATES.REQUEST_RECEIVED, PROFILE_STATES.REQUEST_SENT].includes(state)) {
    return state.replace('_', ' ');
  }
  return '';
};

const Item = (props: Props) => {
  const { username, state, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress({ recipient: username, state })}>
      <View style={styles.row}>
        <Avatar user={props} md />
        <View>
          <Text style={styles.text}>{username}</Text>
          <Text style={styles.state}>{t(state)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Item);
