// @flow
import * as React from 'react';
import { Text, View } from 'components';
import type { Props } from './types';
import styles from './styles';

function ListEmpty(props: Props): React.Element<any> {
  const { query } = props;
  return (
    <View style={styles.view}>
      <View style={styles.row}>
        <Text style={styles.text}>
          <Text>{'Your search - '}</Text>
          <Text style={styles.bold}>{query}</Text>
          <Text>{' - did not match any contact.'}</Text>
        </Text>
      </View>
    </View>
  );
}

export default ListEmpty;
