/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  tmp: {
    backgroundColor: theme.cardContainerBackgroundColor,
    borderColor: theme.cardContainerBorderColor,
    borderRadius: 5,
    marginBottom: 15,
  },
  container: {
    backgroundColor: theme.cardContainerBackgroundColor,
    borderColor: theme.cardContainerBorderColor,
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'column',
    minWidth: 0,
    position: 'relative',
  },
  header: {
    backgroundColor: theme.cardContainerBackgroundColor,
    borderColor: theme.cardContainerBorderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  body: {
    backgroundColor: theme.cardContainerBackgroundColor,
    borderColor: theme.cardContainerBorderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  footer: {
    backgroundColor: theme.cardContainerBackgroundColor,
    borderColor: theme.cardContainerBorderColor,
    borderStyle: 'solid',
    borderWidth: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start',
  },
  metadata: {
    paddingLeft: 15,
    flex: 1,
  },
  highlighted: {
    backgroundColor: theme.cardHighlightedBackgroundColor,
    borderColor: theme.cardHighlightedBorderColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    flex: 1,
  },
  title: {
    color: theme.cardTitleColor,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    marginBottom: 3,
    marginTop: 0,
  },
  subtitle: {
    color: theme.cardSubtitleColor,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    marginBottom: 0,
    marginTop: 0,
  },
  text: {
    color: theme.cardTextColor,
    fontSize: 18,
    textAlign: 'left',
  },
  small: {
    color: theme.cardSmallColor,
    fontSize: 10,
    fontWeight: '400',
  },
  icon: {
    color: theme.cardIconColor,
    fontSize: 18,
    textAlign: 'center',
    width: 24,
  },
});

export default styles;
