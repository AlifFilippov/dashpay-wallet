/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { RNCamera } from 'react-native-camera';
import Touchable from 'components/Touchable';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import config from './config';
import styles from './styles';

function Screen(props: Props): ReactElement {
  const { isReady } = props;
  return (
    <View style={styles.container}>
      <RNCamera
        ref={props.camera}
        style={styles.camera}
        type={props.type}
        flashMode={props.flashMode}
        whiteBalance={props.whiteBalance}
        orientation={'portrait'}
        onCameraReady={props.onCameraReady}>
        <View style={styles.header}>
          <View style={styles.left}>
            <Touchable onPress={props.goBack} style={styles.button}>
              <Text style={styles.buttonFormattedText}>{'Back'}</Text>
            </Touchable>
          </View>
          <View style={styles.right}>
            <Touchable onPress={props.toggleType} style={styles.button}>
              <Icon style={styles.buttonIcon} name={props.typeIcon} />
            </Touchable>
            <Touchable onPress={props.toggleFlashMode} style={styles.button}>
              <Icon style={styles.buttonIcon} name={props.flashModeIcon} />
            </Touchable>
            <Touchable onPress={props.toggleWhiteBalance} style={styles.button}>
              <Text style={styles.buttonText}>{props.whiteBalanceIcon}</Text>
            </Touchable>
          </View>
        </View>
        <View style={styles.body} />
        <View style={styles.footer}>
          <Touchable style={styles.captureTouchable} onPress={props.takePicture}>
            <View style={styles.captureTouchableInner} />
          </Touchable>
        </View>
      </RNCamera>
    </View>
  );
}

export default Screen;
