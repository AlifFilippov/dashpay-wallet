import React from 'react';
import Avatar from 'hooks/Avatar';
import useStyles from './useStyles';

type Props = {
  user: Object,
};

function ProfilePicture({ user }: Props) {
  const styles = useStyles();
  return <Avatar user={user} styles={styles} />;
}

export default ProfilePicture;
