// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Avatar from 'hooks/Avatar';
import useTranslate from 'hooks/Translate';
import type { User } from 'state/types';
import Transition from './Transition';
import useStyles from './useStyles';

type Props = {
  timestamp: string,
  onAccept: Function,
  onReject: Function,
  sender: User,
};

function ContactRequestReceived({
  sender, onAccept, onReject, timestamp,
}: Props) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.center}>
          <Avatar xs user={sender} />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>{sender.username}</Text>
          <Text style={styles.subtitle}>{translate('Wants to be a Contact')}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Transition onAccept={onAccept} onReject={onReject} sender={sender} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.metadata}>
          {translate('Requested | {{ timestamp }}', {
            timestamp,
          })}
        </Text>
      </View>
    </View>
  );
}

export default ContactRequestReceived;
