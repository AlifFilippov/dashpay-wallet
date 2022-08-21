import React, { useState, useEffect } from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RNCamera } from 'react-native-camera';
import { sampleSize } from 'lodash';
import useStyles from './useStyles';

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const INITIAL_CAM_AREA_MARGIN = Math.round(SCREEN_WIDTH / 10);
const FINAL_CAM_AREA_MARGIN = Math.round(INITIAL_CAM_AREA_MARGIN / 2);
const INITIAL_CAM_AREA_HEIGHT = Math.round(SCREEN_WIDTH / 2);
const FINAL_CAM_AREA_HEIGHT = SCREEN_WIDTH - FINAL_CAM_AREA_MARGIN * 2;

const colors = sampleSize([
  '#4B4742', '#52555A', '#273234',
  '#3C473D', '#504B43', '#6B4A3A',
], 3);

const ScannerScreen = () => {
  const styles = useStyles();
  const [cameraIsInitialized, setCameraIsInitialized] = useState(false);
  const containerHeight = new Animated.Value(INITIAL_CAM_AREA_HEIGHT);
  const containerMargin = new Animated.Value(INITIAL_CAM_AREA_MARGIN);
  const buttonOpacity = new Animated.Value(1);
  const initLayerOpacity = new Animated.Value(1);

  useEffect(() => {
    if (!cameraIsInitialized) {
      return;
    }
    const SPRING_CONFIG = {
      useNativeDriver: true,
    };
    Animated.parallel([
      Animated.spring(containerHeight, {
        toValue: FINAL_CAM_AREA_HEIGHT,
      }, SPRING_CONFIG),
      Animated.spring(containerMargin, {
        toValue: FINAL_CAM_AREA_MARGIN,
      }, SPRING_CONFIG),
      Animated.spring(buttonOpacity, {
        toValue: 0,
      }, SPRING_CONFIG),
      Animated.sequence([
        Animated.delay(500),
        Animated.spring(initLayerOpacity, {
          toValue: 0,
        }, SPRING_CONFIG),
      ]),
    ]).start();
  });

  const onBarCodeRead = ({ data }) => {
    setCameraIsInitialized(false);
    Alert.alert(data);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, { zIndex: 1, opacity: initLayerOpacity }]}>
        <LinearGradient style={styles.container} colors={colors}>
          <Animated.View style={{
            height: containerHeight,
            marginLeft: containerMargin,
            marginRight: containerMargin,
          }}
          >
            <View style={styles.fixedHeightRow}>
              <View style={styles.row}>
                <View style={[styles.cornerBox, styles.withTopBorder, styles.withLeftBorder]} />
                <View style={styles.container} />
                <View style={[styles.cornerBox, styles.withTopBorder, styles.withRightBorder]} />
              </View>
            </View>
            <Animated.View style={[
              styles.row, styles.centerItemsContainer, { opacity: buttonOpacity },
            ]}
            >
              <TouchableOpacity style={styles.button} onPress={() => setCameraIsInitialized(true)}>
                <Text style={styles.buttonText}>TAP TO SCAN</Text>
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.fixedHeightRow}>
              <View style={[styles.cornerBox, styles.withBottomBorder, styles.withLeftBorder]} />
              <View style={styles.container} />
              <View style={[styles.cornerBox, styles.withBottomBorder, styles.withRightBorder]} />
            </View>
          </Animated.View>
        </LinearGradient>
      </Animated.View>
      {cameraIsInitialized && (
        <RNCamera
          captureAudio={false}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
          onBarCodeRead={onBarCodeRead}
          style={StyleSheet.absoluteFill}
        >
          <View style={[styles.row, styles.withGreyBackground]} />
          <View style={[{ flexDirection: 'row', height: FINAL_CAM_AREA_HEIGHT }]}>
            <View style={[styles.container, styles.withGreyBackground]} />
            <View style={[{ width: FINAL_CAM_AREA_HEIGHT }]} />
            <View style={[styles.container, styles.withGreyBackground]} />
          </View>
          <View style={[styles.row, styles.withGreyBackground]} />
        </RNCamera>
      )}
    </View>
  );
};

export default ScannerScreen;
