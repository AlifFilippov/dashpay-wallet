/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Text } from 'react-native';
import { FormattedRelative } from 'react-intl';
import { pick } from 'lodash';
import { keys } from 'lodash';
import { omit } from 'lodash';
import defaultPorps from './porps';
import initialState from './state';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class Relative extends React.PureComponent<Props, State> {
  static defaultPorps = defaultPorps;
  static initialState = initialState;

  constructor(props: Props) {
    super(props);
    this.state = this.constructor.initialState;
    this.value = String(props.children);
  }

  static getDerivedStateFromProps(props: Props): State {
    const formattedRelativeProps = pick(props, keys(defaultPorps));
    const textProps = omit(props, keys(defaultPorps));
    return { formattedRelativeProps, textProps };
  }

  render(): ReactElement {
    const { formattedRelativeProps } = this.state;
    const { textProps } = this.state;
    return (
      <FormattedRelative {...formattedRelativeProps} value={this.value}>
        {message => <Text {...textProps}>{message}</Text>}
      </FormattedRelative>
    );
  }
}

export default Relative;
