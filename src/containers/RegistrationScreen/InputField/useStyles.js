import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    alignItems: 'center',
  },
  textInput: {
    color: theme.white,
    fontSize: theme.fontSizeBase,
  },
  validationError: {
    color: theme.white,
    fontSize: theme.fontSizeBase,
    fontWeight: 'bold',
  },
});

export default createUseStyles(styles);
