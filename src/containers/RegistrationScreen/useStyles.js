import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.primary,
    padding: theme.fontSizeBase * 2,
  },
  block: {
    alignItems: 'center',
    marginBottom: theme.fontSizeBase * 4,
  },
  header: {
    color: theme.white,
    fontSize: theme.fontSizeLg,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    color: theme.white,
  },
});

export default createUseStyles(styles);
