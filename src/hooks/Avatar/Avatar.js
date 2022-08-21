// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Image from 'hooks/Image';
import Icon from 'hooks/Icon';
import type { Profile } from 'state/profiles/types';
import useAvatar from './useAvatar';

type Props = {
  user: Profile,
};

const Avatar = (props: Props) => {
  const { bind, state, styles } = useAvatar(props);
  const { letter } = state.context;

  switch (state.value) {
    case 'image':
      return <Image style={styles.image} {...bind} />;

    case 'text':
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{letter}</Text>
        </View>
      );

    case 'icon':
      return (
        <View style={styles.container}>
          <Icon style={styles.icon} name="dash" />
        </View>
      );

    default:
      return null;
  }
};

export default Avatar;
