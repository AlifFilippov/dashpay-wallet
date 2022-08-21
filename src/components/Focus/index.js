/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { debounce } from 'utilities';
import defaultProps from './defaults';
import type { Props } from './types';
import type { State } from './types';

class Focus extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);

    (this: any).handleOnChange = debounce(
      this.handleOnChange.bind(this),
      this.props.debounce
    );

    const bind = {
      onFocus: this.handleOnFocus.bind(this),
      onBlur: this.handleOnBlur.bind(this),
      onChangeText: this.handleOnChangeText.bind(this)
    };

    this.state = {
      focused: props.focused,
      value: props.value,
      bind
    };
  }

  handleOnFocus(event: Object) {
    this.setState({ focused: true });
  }

  handleOnBlur(event: Object) {
    this.setState({ focused: false });
  }

  handleOnChangeText(value: string) {
    this.setState({ value }, this.handleOnChange);
  }

  handleOnChange() {
    // After we add mapProps feature to compose util function
    // we need to split onChange in a separate component "e.g Value".
    // If we do it now, we will have conflicts with bind.
    this.props.onChange(this.state.value);
  }

  render(): React.Element<any> {
    const renderedChildren = this.props.children(this.state);
    return renderedChildren && React.Children.only(renderedChildren);
  }
}

export default Focus;
