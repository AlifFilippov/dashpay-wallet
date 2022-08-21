/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import defaultProps from './defaults';
import type { Props } from './types';
import type { State } from './types';

class Interval extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    // Trigger update by counting them.
    (this: any).countUpdates = this.countUpdates.bind(this);

    this.state = {
      times: 0
    };
  }

  countUpdates() {
    const times = this.state.times + 1;
    this.setState({ times });
  }

  componentDidMount() {
    if (Number.isFinite(this.props.delay)) {
      this.intervalId = setInterval(this.countUpdates, this.props.delay);
    }
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render(): React.Element<any> {
    const renderedChildren = this.props.children(this.state);
    return renderedChildren && React.Children.only(renderedChildren);
  }
}

export default Interval;
