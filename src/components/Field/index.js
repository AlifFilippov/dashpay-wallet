/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { compose } from 'utilities';
import Styles from '../Styles';
import Validation from './Validation';
import styles from './styles';
type Props = {};

const Composed = compose([
  (props: Props): React.Element<any> => <Validation {...props} />,
  (props: Props): React.Element<any> => <Styles {...props} />
]);

function Field(props: Props): React.Element<any> {
  return <Composed styles={styles} {...props} />;
}

export default Field;
