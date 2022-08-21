/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';

// Internal dependencies
import Icon from 'hooks/Icon';
import useStyles from './useStyles';

type Props = {
  onPress: Function,
};

function BackButton({ onPress }: Props) {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon style={styles.icon} name="chevron-left" />
    </TouchableOpacity>
  );
}

export default BackButton;
