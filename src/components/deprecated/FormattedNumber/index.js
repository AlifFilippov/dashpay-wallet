/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Text } from 'react-native';
import { FormattedNumber } from 'react-intl';
import { pick } from 'lodash';
import { keys } from 'lodash';
import { omit } from 'lodash';
import defaultPorps from './porps';
import initialState from './state';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { State } from './types';

class Number extends React.PureComponent<Props, State> {
  static defaultPorps = defaultPorps;
  static initialState = initialState;

  constructor(props: Props) {
    super(props);
    this.state = this.constructor.initialState;
    this.value = String(props.children);
  }

  static getDerivedStateFromProps(props: Props): State {
    const formattedNumberProps = pick(props, keys(defaultPorps));
    const textProps = omit(props, keys(defaultPorps));
    return { formattedNumberProps, textProps };
  }

  render(): ReactElement {
    const { formattedNumberProps } = this.state;
    const { textProps } = this.state;
    return (
      <FormattedNumber {...formattedNumberProps} value={this.value}>
        {message => <Text {...textProps}>{message}</Text>}
      </FormattedNumber>
    );
  }
}

export default Number;
