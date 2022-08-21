// @flow
import { StyleSheet } from 'react-native';
import { THEMES } from 'constants';

const theme = THEMES.vivid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },

  text: {
    color: theme.foreground,
  },

  input: {
    backgroundColor: 'white',
    color: theme.fieldInputColor,
    flexDirection: 'row',
    width: 300,
  },
});

export default styles;
