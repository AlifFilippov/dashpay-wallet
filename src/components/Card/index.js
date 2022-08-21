/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Composer from 'utilities/compose';
import Styles from 'components/Styles';
import Touch from 'components/Touch';
import styles from './styles';

type Props = {};

function Card(tmpProps) {
  return (
    <Composer
      components={[
        (props: Props): React.Element<any> => (
          <Touch {...props} onPress={tmpProps.onPress} />
        ),
        (props: Props): React.Element<any> => (
          <Styles {...props} styles={styles} />
        )
      ]}>
      {([{ bind, touched }, { styles }]) => {
        return tmpProps.children({ bind, touched, styles });
      }}
    </Composer>
  );
}

export default Card;
