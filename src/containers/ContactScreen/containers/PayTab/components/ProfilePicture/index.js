// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import View from 'components/View';
import Text from 'components/Text';
import type { Props } from './types';
import useStyles from './useStyles';

const ProfilePicture = (({ receiver }): Props) => {
  const styles = useStyles();
  const { username } = receiver;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar user={receiver} lg />
      </View>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={1}>
          {username}
        </Text>
      </View>
    </View>
  );
};

export default ProfilePicture;
