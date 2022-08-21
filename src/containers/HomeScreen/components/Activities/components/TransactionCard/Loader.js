import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import View from 'components/View';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    borderColor: 'rgba(255, 255, 255, 0.75)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: 3,
  },
});

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#088BE2" />
  </View>
);

export default Loader;
