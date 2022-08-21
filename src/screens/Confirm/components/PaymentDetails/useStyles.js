/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    backgroundColor: 'transparent',
    padding: 14,
  },
  row: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  subheading: {
    fontSize: 28,
    color: '#E2DFFA',
  },
  divider: {
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 21,
    color: '#E2DFFA',
    lineHeight: 21,
  },
  heading: {
    textAlign: 'center',
    fontSize: 50,
    color: '#E2DFFA',
    lineHeight: 50,
  },
  text: {
    fontSize: 16,
    color: '#E2DFFA',
  },
});

export default makeStyles(styles);
