/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import type { Element } from 'react';
import type { Theme } from 'constants';

export type ReactElement = Element<*>;

export type Props = {
  data: Array<Object>,
  renderItem: Function,
  onItemPress: Function,
};
