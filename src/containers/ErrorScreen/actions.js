/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';

function actions(dispatch: Function): Object {
  return bindActionCreators({  }, dispatch);
}

export default actions;
