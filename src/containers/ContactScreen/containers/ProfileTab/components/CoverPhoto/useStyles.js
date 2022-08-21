import { createUseStyles } from 'hooks/Styles';

const styles = theme => ({
  container: {
    borderRadius: 0,
    height: theme.screenWidth,
    width: theme.screenWidth,
  },
  image: {
    borderRadius: 0,
    height: theme.screenWidth,
    width: theme.screenWidth,
  },
  text: {
    fontSize: theme.avatarFontSize,
  },
  icon: {
    fontSize: theme.avatarFontSize,
  },
});

export default createUseStyles(styles);
