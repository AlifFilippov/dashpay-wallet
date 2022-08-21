/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { Text } from 'components';
import type { Props } from './types';
import styles from './styles';

function ListHeader(props: Props): React.Element<any> {
  const { title, data } = props.section;
  const count = data.length;
  return <Text style={styles.text}>{`${title} (${count})`}</Text>;
}

export default ListHeader;
