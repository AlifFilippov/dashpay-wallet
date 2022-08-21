/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { FormConsumer } from './context';

function connect(Component) {
  return props => (
    <FormConsumer>{form => <Component {...props} form={form} />}</FormConsumer>
  );
}

export default connect;
