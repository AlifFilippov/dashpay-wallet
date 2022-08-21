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
};

function ContactRequestRejected({ sender, timestamp }: Props) {
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
          <Text style={styles.subtitle}>{translate('Ignored from contacts')}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.underlined}>
          <View style={styles.center}>
            <Text style={styles.underlinedText}>
              {translate('IGNORED | {{ timestamp }}', {
                timestamp,
              })}
            </Text>
          </View>
        </View>
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

export default ContactRequestRejected;
