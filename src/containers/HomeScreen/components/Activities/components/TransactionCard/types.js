// @flow
import { StyleSheet } from 'react-native';
import type { Profile } from 'state/profiles/types';

export type Styles = {
  styles: StyleSheet.Styles,
}

export type Props = {
  item: Profile,
  acceptContactRequest: ?Function,
  rejectContactRequest: ?Function,
};

export type ItemWithStylesProps = Profile & Styles;
