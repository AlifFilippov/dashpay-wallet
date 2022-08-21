// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import type { Profile } from 'state/profiles/types';
import useStyles from './useStyles';

const CoverPhoto = (props: Profile) => <Avatar user={props} styles={useStyles()} />;

export default CoverPhoto;
