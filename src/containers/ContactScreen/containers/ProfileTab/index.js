// @flow
import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import Text from 'components/Text';
import type { Profile } from 'state/profiles/types';
import CoverPhoto from './components/CoverPhoto';
import ProfileActionButton from './components/ProfileActionButton';
import selector from './selectors';
import useStyles from './useStyles';

type Props = {
  profile: Profile,
};

const ProfileTab = ({ profile }: Props) => {
  const styles = useStyles();
  const { username, state } = profile;
  return (
    <ScrollView style={styles.container}>
      <CoverPhoto {...profile} />
      <View style={styles.row}>
        <View style={styles.container}>
          <View style={[styles.row, styles.center, styles.usernameRow]}>
            <Text style={styles.username}>
              {username}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <ProfileActionButton username={username} state={state} />
      </View>
    </ScrollView>
  );
};

export default connect(selector)(ProfileTab);
