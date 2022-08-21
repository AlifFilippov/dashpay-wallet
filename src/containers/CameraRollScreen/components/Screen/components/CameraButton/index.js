/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'components/Icon';
import styles from './styles';

type Props = {};
type State = {};

class CameraButton extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    this.props.onPress();
  }

  render(): ReactElement {
    const { activeOpacity } = this.props;
    const { underlayColor } = this.props;
    const { onPress } = this.props;
    const { children } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        underlayColor={underlayColor}
        onPress={this.handleOnPress}
        style={styles.cameraButton}>
        <Icon style={styles.cameraIcon} name={'camera'} />
      </TouchableOpacity>
    );
  }
}

export default CameraButton;
