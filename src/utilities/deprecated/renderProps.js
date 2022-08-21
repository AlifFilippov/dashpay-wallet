/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { isFunction } from 'lodash';

function renderProps(props, componentProps) {
  const { children, render } = props;
  const fn = isFunction(children) ? children : render;
  return fn ? fn(componentProps) : props;
}

export default renderProps;
