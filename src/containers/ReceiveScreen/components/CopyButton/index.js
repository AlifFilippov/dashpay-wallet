// @flow

import * as React from 'react';
import { Clipboard, TouchableOpacity } from 'react-native';

import { Button, SlideInRight, Text } from 'components';

import buttonStyles from './styles';

type Props = {
  confirm: boolean,
  show: boolean,
  data: string,
  onCopy: Function,
  onError: Function,
};

function CopyButton(props: Props): React.Element<any> {
  const {
    confirm,
    show,
    data = null,
    onCopy,
    onError,
  } = props;
  const children = confirm ? 'Copied!' : 'Copy';
  const toValue = show ? 0 : 100;

  async function handlePress() {
    try {
      if (!data) {
        throw new Error('Expected a data to copy!');
      }
      const value = await Clipboard.setString(data);
      if (onCopy) {
        onCopy(value);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  }

  return (
    <Button onPress={handlePress} styles={buttonStyles} {...props}>
      {({ bind, styles }) => (
        <SlideInRight toValue={toValue}>
          <TouchableOpacity style={styles.container} {...bind}>
            <Text style={styles.text}>{children}</Text>
          </TouchableOpacity>
        </SlideInRight>
      )}
    </Button>
  );
}

export default CopyButton;
