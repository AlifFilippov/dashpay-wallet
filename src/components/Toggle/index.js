/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';
import { renderProps } from 'utilities';

const noop = () => {};

class Value extends React.Component {
  state = {
    value: this.props.initial
  };

  _set = (updater, cb = noop) => {
    const { onChange = noop } = this.props;

    this.setState(
      typeof updater === 'function'
        ? state => ({ value: updater(state.value) })
        : { value: updater },
      () => {
        onChange(this.state.value);
        cb();
      }
    );
  };
  _reset = (cb = noop) => {
    this._set(this.props.initial, cb);
  };

  render() {
    return renderProps(this.props, {
      value: this.state.value,
      set: this._set,
      reset: this._reset
    });
  }
}

const Toggle = ({ initial = false, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        on: value,
        off: !value,
        set: value => set(value),
        reset,
        toggle: () => set(on => !on),
        setOn: () => set(true),
        setOff: () => set(false)
      })
    }
  </Value>
);

export default Toggle;
