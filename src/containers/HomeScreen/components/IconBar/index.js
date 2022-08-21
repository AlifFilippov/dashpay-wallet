/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import View from 'components/View';
import { IconButton } from 'components';
import type { Props } from './types';

const styles = {
  buttonGroup: {
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 0,
  },
};

function IconBar(props: Props) {
  // const { icon } = props;
  // const { name } = props;

  return (
    <View style={styles.buttonGroup}>
      <IconButton
        icon="pay"
        text="Pay"
        action={() => props.navigation.navigate('PayScreen')}
      />
      <IconButton
        icon="receive"
        text="Receive"
        action={() => props.navigation.navigate('ReceiveScreen')}
      />
      <IconButton
        icon="contacts"
        text="Contacts"
        action={() => props.navigation.navigate('ContactsScreen')}
      />
    </View>
  );
}


export default IconBar;
