// @flow

const styles = (theme: Object): Object => ({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.btnContainerBackgroundColor,
    borderColor: theme.btnContainerBackgroundColor,
    borderRadius: 21,
    borderWidth: 0,
    height: 42,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
  },
  text: {
    color: theme.btnTextColor,
    fontSize: 16,
  },
});

export default styles;
