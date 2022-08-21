// @flow
import React from 'react';
import View from 'components/View';
import Text from 'components/Text';
import { FormattedTime } from 'react-intl';
import { PROFILE_STATES } from 'state/profiles/constants';
import type { ItemWithStylesProps as Props } from './types';

const Footer = ({
  state,
  timestamp,
  styles,
}: Props) => (
  <View style={styles.footer}>
    <FormattedTime
      value={timestamp}
      year="numeric"
      month="long"
      day="numeric"
    >
      {formattedTime => (
        <Text style={styles.small}>
          {state === PROFILE_STATES.CONTACT ? 'ADDED' : 'RECEIVED'}
          |
          {formattedTime}
        </Text>
      )}
    </FormattedTime>
  </View>
);

export default Footer;
