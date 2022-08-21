import { createUseStyles } from 'hooks/Styles';

const CORNER_BORDER_WIDTH = 4;
const LIGHT_GREY = 'rgba(255, 255, 255, 0.2)';

const styles = (theme) => {
  const CORNER_BOX_HEIGHT = Math.round(theme.screenWidth / 15);
  return {
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    withGreyBackground: {
      backgroundColor: LIGHT_GREY,
    },
    fixedHeightRow: {
      height: CORNER_BOX_HEIGHT,
      flexDirection: 'row',
    },
    centerItemsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: LIGHT_GREY,
      width: 'auto',
      height: 'auto',
      paddingVertical: theme.buttonPaddingVerticalBase,
      paddingHorizontal: theme.buttonPaddingHorizontalLarge,
      borderRadius: theme.buttonBorderRadiusBase,
    },
    buttonText: {
      color: theme.white,
      fontSize: theme.fontSizeBase,
    },
    cornerBox: {
      width: CORNER_BOX_HEIGHT,
    },
    withTopBorder: {
      borderTopColor: LIGHT_GREY,
      borderTopWidth: CORNER_BORDER_WIDTH,
    },
    withBottomBorder: {
      borderBottomColor: LIGHT_GREY,
      borderBottomWidth: CORNER_BORDER_WIDTH,
    },
    withLeftBorder: {
      borderLeftColor: LIGHT_GREY,
      borderLeftWidth: CORNER_BORDER_WIDTH,
    },
    withRightBorder: {
      borderRightColor: LIGHT_GREY,
      borderRightWidth: CORNER_BORDER_WIDTH,
    },
  };
};

export default createUseStyles(styles);
