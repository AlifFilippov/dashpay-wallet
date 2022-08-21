// @flow
import React from 'react';
import { View, Text } from 'react-native';
import Avatar from 'hooks/Avatar';
import useTranslate from 'hooks/Translate';
import type { User } from 'state/types';
import useStyles from './useStyles';

type Props = {
  timestamp: string,
  sender: User,
  receiver: User,
};

function ContactRequestSent({ sender, receiver, timestamp }: Props) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Avatar xs user={sender} />
          </View>
          <View style={styles.col}>
            <Text style={styles.title}>{sender.username}</Text>
            <Text style={styles.subtitle}>{translate('Requesting Contact')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.underlined}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Avatar xs user={receiver} />
            </View>
            <View style={styles.col}>
              <Text style={styles.title}>{receiver.username}</Text>
              <Text style={styles.subtitle}>{translate('Pending Request')}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.metadata}>
          {translate('Sent | {{ timestamp }}', {
            timestamp,
          })}
        </Text>
      </View>
    </View>
  );
}

export default ContactRequestSent;
