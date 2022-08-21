/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import * as React from 'react';
import { Image } from 'react-native';
import type { Props } from './types';
import type { ReactElement } from './types';

const Avatar = (props: Props): ReactElement => {
  const defaultProps = {
    style: {
      height: 100,
      width: 100,
      borderRadius: 50
    },
    source: require('assets/images/avatar-default.png')
  };

  const mergedProps = {
    ...defaultProps,
    ...props
  };

  return (
    <Image source={mergedProps.source} style={mergedProps.style} />
  );
};

export default Avatar;
