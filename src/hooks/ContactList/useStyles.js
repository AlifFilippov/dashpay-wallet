/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    backgroundColor: '#F0F4F5',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  icon: {
    color: '#000',
    fontSize: 24,
  },
  title: {
    color: '#000',
    fontSize: 16,
    marginTop: 16,
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyMessage: {
    fontSize: 16,
  },
});

export default makeStyles(styles);
