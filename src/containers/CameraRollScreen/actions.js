/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { fetchPhotos } from 'state/cameraRoll/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ fetchPhotos }, dispatch);
}

export default actions;
