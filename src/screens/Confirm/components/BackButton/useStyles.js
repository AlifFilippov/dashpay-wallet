/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 48,
    width: 48,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 14,
    marginLeft: -7, // tmp font awesome issue
  },
});

export default makeStyles(styles);
