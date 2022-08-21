import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  username: {
    fontSize: theme.fontSizeLg,
  },
  usernameRow: {
    padding: 32,
  },
  row: {
    alignSelf: 'stretch',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createUseStyles(styles);
