/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies

const styles = () => ({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flex: 1,
    position: 'relative',
  },
  overlay: {
    backgroundColor: '#211F37',
    borderColor: '#211F37',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  body: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'relative',
    flex: 1,
    transform: [{ translateY: 0 }],
    paddingBottom: 10,
    overflow: 'hidden',
  },
  inner: {
    elevation: 3,
    backgroundColor: '#403C6E',
    flex: 1,
  },
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
  paymentDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  confirmButton: {
    padding: 24,
  },
  triangle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderLeftWidth: 12,
    borderRightColor: 'transparent',
    borderRightWidth: 12,
    borderStyle: 'solid',
    borderTopColor: '#403C6E',
    borderTopWidth: 12,
    height: 0,
    marginBottom: -10,
    width: 0,
  },
  footer: {
    backgroundColor: '#211F37',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    paddingTop: 0,
  },
});

export default styles;
