/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { uploadUserPicture } from 'state/camera/actions';
import { toggleType } from 'state/camera/actions';
import { toggleFlashMode } from 'state/camera/actions';
import { toggleWhiteBalance } from 'state/camera/actions';
import { clearPhotos } from 'state/cameraRoll/actions';
import {fetchPhotos}from 'state/cameraRoll/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      uploadUserPicture,
      toggleType,
      toggleFlashMode,
      toggleWhiteBalance,
      clearPhotos,
      fetchPhotos
    },
    dispatch
  );
}

export default actions;
