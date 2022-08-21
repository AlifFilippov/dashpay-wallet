/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { renderProps } from 'utilities';

type Props = {};
type State = {};

class Touch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const bind = {
      onPress: this.handleOnPress.bind(this),
      onPressIn: this.handleOnPressIn.bind(this),
      onPressOut: this.handleOnPressOut.bind(this)
    };

    this.state = {
      touched: false,
      bind
    };
  }

  handleOnPress(event: Object) {
    this.props.onPress();
  }

  handleOnPressIn(event: Object) {
    this.setState({ touched: true });
  }

  handleOnPressOut(event: Object) {
    this.setState({ touched: false });
  }

  render(): React.Element<any> {
    return renderProps(this.props, this.state);
  }
}

export default Touch;
