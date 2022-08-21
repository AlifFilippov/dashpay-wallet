// @flow

import * as React from 'react';
import { Clipboard, TouchableOpacity } from 'react-native';

import {
  Button,
  SlideInRight,
  Text,
} from 'components';

import buttonStyles from './styles';

type Props = {
  confirm: boolean,
  show: boolean,
  onPaste: Function,
  onError: Function,
};

function PasteButton(props: Props): React.Element<any> {
  const {
    confirm,
    show,
    onPaste,
    onError,
  } = props;
  const children = confirm ? 'Pasted!' : 'Paste';
  const toValue = show ? 0 : 100;

  async function handlePress() {
    try {
      const value = await Clipboard.getString();
      onPaste(value);
    } catch (error) {
      onError(error);
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

export default PasteButton;
