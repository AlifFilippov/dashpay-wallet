import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 12,
    backgroundColor: '#EFEFEF',
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  icon: {
    color: '#000',
    fontSize: 24,
  },
  title: {
    color: '#000',
    fontSize: 16,
    marginTop: 16,
  },
});

export default styles;
