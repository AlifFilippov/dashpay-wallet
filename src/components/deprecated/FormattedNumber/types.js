/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import type { TextProps } from 'react-native';

export type FormattedMessageProps = {
  children: string,
  defaultMessage?: string,
  description?: string | object,
  tagName?: string,
  values?: object
};

export type Props = TextProps & FormattedMessageProps;

export type State = {
  formattedMessageProps?: FormattedMessageProps,
  textProps?: TextProps
};
