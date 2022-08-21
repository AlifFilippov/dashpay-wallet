/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  dots: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  dot: {
    backgroundColor: '#403C6E',
    borderColor: '#403C6E',
    width: 4,
    height: 4,
    borderRadius: 2,
    borderWidth: 0,
  },
});

export default makeStyles(styles);
