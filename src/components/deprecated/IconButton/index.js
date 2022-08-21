/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Icon } from 'components';
import { Text } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { THEMES } from 'constants';
import styles from './styles';
import type { Props } from './types';
import type { ReactElement } from './types';

const IconButton = ({ icon, text, action }: Props): ReactElement => (
  <TouchableHighlight
    style={styles.highlight}
    underlayColor="transparent"
    onPress={action}>
    <View style={styles.container}>
      <Icon name={icon} style={styles.image} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  </TouchableHighlight>
);

export default IconButton;
