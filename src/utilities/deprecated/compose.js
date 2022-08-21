/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';

const process = (component, ...args) =>
  (typeof component.type === 'function'
    ? React.cloneElement
    : React.createElement)(component, ...args);

function compose(components) {
  const reversed = components.reverse();

  // mapProps is missing but this is enough for now.
  function Composed(props) {
    const render = props.children || props.render;
    const reducer = (accumulator, Component) => (propsList = {}) =>
      process(Component, {
        ...props,
        ['children']: owenProps => {
          return accumulator({ ...propsList, ...owenProps });
        }
      });
    return reversed.reduce(reducer, render)();
  }

  return Composed;
}

export default compose;
