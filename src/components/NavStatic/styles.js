/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.navbarContainerBackgroundColor,
    borderColor: theme.navbarContainerBorderColor,
    borderWidth: theme.navbarContainerBorderWidth,
    height: theme.navbarContainerHeight,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
  body: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  right: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  wrapper: {
    backgroundColor: theme.navbarContainerBackgroundColor,
    borderColor: theme.navbarContainerBackgroundColor,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 14,
    elevation: 2,
  },
  title: {
    color: theme.navbarTitleColor,
    fontSize: theme.navbarTitleFontSize,
    fontWeight: theme.navbarTitleFontWeight,
    lineHeight: theme.navbarTitleLineHeight,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: theme.navbarContainerHeight,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: theme.navbarTextColor,
    fontSize: theme.navbarTextFontSize,
    fontWeight: theme.navbarTextFontWeight,
    lineHeight: theme.navbarTextLineHeight,
    marginLeft: 4,
  },
  icon: {
    color: theme.navbarIconColor,
    fontSize: theme.navbarIconFontSize,
    fontWeight: theme.navbarIconFontWeight,
    lineHeight: theme.navbarIconLineHeight,
  },
});

export default styles;
