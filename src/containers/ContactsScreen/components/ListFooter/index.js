/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import { View } from 'components';
import { Spinner } from 'components';
import type { Props } from './types';
import styles from './styles';

function ListFooter(props: Props): React.Element<any> {
  if (!props.isSearching) {
    return null;
  }
  return (
    <View style={styles.row}>
      <Spinner size="small" color="#9e9e9e" />
    </View>
  );
}

export default ListFooter;
