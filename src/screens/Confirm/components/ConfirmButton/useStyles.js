/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { makeStyles } from 'hooks/Styles';

const styles = () => ({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 28,
    height: 56,
    padding: 3,
  },
  inner: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 25,
    position: 'relative',
    flexGrow: 1,
    height: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
  },
  image: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    resizeMode: 'cover',
    height: 50,
    width: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 3,
    marginTop: 3,
  },
  feedback: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 25,
    borderWidth: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
  },
  feedbackText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  col: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 25,
    borderColor: '#fff',
    borderRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderWidth: 0,
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
    minWidth: 110,
  },
  row: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default makeStyles(styles);
