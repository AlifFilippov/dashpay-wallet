import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);
