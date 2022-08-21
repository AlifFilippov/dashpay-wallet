// @flow
import React from 'react';
import View from 'components/View';
import Text from 'components/Text';
import Avatar from 'hooks/Avatar';
import { PROFILE_STATES } from 'state/profiles/constants';
import type { Profile } from 'state/profiles/types';

type Props = {
  item: Profile,
  styles: Object,
};

const Header = ({
  item: {
    state,
    username,
    avatarUrl,
  },
  styles,
}: Props) => (
  <View style={styles.header}>
    <View style={styles.row}>
      <Avatar xs user={{ avatarUrl }} />
      <View style={styles.metadata}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.title} numberOfLines={1}>
            {username}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.subtitle} numberOfLines={1}>
            {state === PROFILE_STATES.CONTACT ? 'Added to Contacts' : 'Wants to be a Contact'}
          </Text>
        </View>
      </View>
    </View>
  </View>
);

export default Header;
