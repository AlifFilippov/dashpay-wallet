import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 12,
  },
  primaryButton: {
    overflow: 'hidden',
    height: 40,
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: '#088BE2',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
  },
  seconadryButton: {
    overflow: 'hidden',
    height: 40,
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: '#EAEAE9',
    alignItems: 'center',
  },
  seconadryButtonText: {
    color: 'gray',
  },
});
