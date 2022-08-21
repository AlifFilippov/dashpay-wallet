import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: theme.fontSizeLg,
    color: theme.white,
  },
  row: {
    marginBottom: 16,
  },
});

export default createUseStyles(styles);
