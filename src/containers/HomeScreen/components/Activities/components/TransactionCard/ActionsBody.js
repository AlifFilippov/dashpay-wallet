// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import View from 'components/View';
import Text from 'components/Text';
import Button from 'components/Button';

type Props = {
  handlePressAccept: Function,
  handlePressReject: Function,
  styles: Object,
};

const ActionsBody = ({
  handlePressAccept,
  handlePressReject,
  styles,
}: Props) => (
  <View style={styles.body}>
    <View style={styles.row}>
      <Button primary full sm>
        {buttonProps => (
          <TouchableOpacity
            style={buttonProps.styles.container}
            onPress={handlePressAccept}
          >
            <Text style={buttonProps.styles.text}>Yes</Text>
          </TouchableOpacity>
        )}
      </Button>
      <View style={{ width: 16 }} />
      <Button secondary full sm>
        {buttonProps => (
          <TouchableOpacity
            style={buttonProps.styles.container}
            onPress={handlePressReject}
          >
            <Text style={buttonProps.styles.text}>No</Text>
          </TouchableOpacity>
        )}
      </Button>
    </View>
  </View>
);

export default ActionsBody;
