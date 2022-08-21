// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import View from 'components/View';
import Text from 'components/Text';
import type { Profile } from 'state/profiles/types';
import useStyles from './useStyles';

const ProfilePic = (user: Profile) => {
  const styles = useStyles();
  const { username } = user;
  return (
    <View style={styles.center}>
      <View style={styles.row}>
        <Avatar user={user} inverse lg />
      </View>
      <View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </View>
  );
};

export default ProfilePic;
