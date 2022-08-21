/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    backgroundColor: '#403C6E',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderColor: '#403C6E',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    height: 50,
    width: 50,
  },
  image: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 0,
    height: 50,
    width: 50,
  },
  text: {
    color: '#fff',
    fontSize: 21,
  },
  icon: {
    color: '#fff',
    fontSize: 21,
  },
});

export default makeStyles(styles);
