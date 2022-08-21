/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { createUseStyles } from 'hooks/Styles';

const styles = () => ({
  container: {},
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#000',
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 24,
    marginBottom: 24,
  },
});

export default createUseStyles(styles);
