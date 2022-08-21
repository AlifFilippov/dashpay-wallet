/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { compose } from 'utilities';
import { isFunction } from 'utilities';
import Styles from '../Styles';
import Touch from '../Touch';
import Touchable from '../Touchable';
import View from '../View';
import defaultProps from './defaults';
import styles from './styles';
import type { Props } from './types';

const Composed = compose([
  (props: Props): React.Element<any> => <Styles {...props} />,
  (props: Props): React.Element<any> => <Touch {...props} />
]);

function Button(props: Props): React.Element<any> {
  return isFunction(props.children) ? (
    <Composed styles={styles} {...props} />
  ) : (
    <Box style={props.style}>
      <Touchable {...props} />
    </Box>
  );
}

Button.defaultProps = defaultProps;

export default Button;
