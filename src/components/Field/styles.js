/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

const styles = (theme: Object): Object => ({
  ['container']: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    marginBottom: 15
  },
  ['row']: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-start'
  },
  ['label']: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 5,
    paddingTop: 5
  },
  ['input']: {
    backgroundColor: '#fff',
    borderColor: '#ced4da',
    borderRadius: 25,
    borderWidth: 1,
    color: '#495057',
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    height: 50,
    lineHeight: 24,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 12
  },
  ['text']: {
    flex: 1,
    fontSize: 12,
    fontWeight: '400',
    paddingBottom: 5,
    paddingTop: 5
  },

  // Disabled state
  ['input.disabled']: {
    backgroundColor: '#e9ecef'
  },

  // Center
  ['label__center']: {
    textAlign: 'center'
  },
  ['input__center']: {
    textAlign: 'center'
  },
  ['text__center']: {
    textAlign: 'center'
  }
});

export default styles;
