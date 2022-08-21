/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { CameraRoll } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import { keys } from 'lodash';
import { pick } from 'lodash';
import initialParams from './params';

async function requestCameraRollPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Notify App Photos Permission',
        message: 'Notify App needs access to your photos.'
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    const { message = 'Something went wrong.' } = err;
    throw new Error(message);
  }
}

export function fetchPhotos() {
  return (dispatch, getState) =>
    dispatch({
      types: [
        'CAMERA_ROLL_FETCH_PHOTOS_REQUEST',
        'CAMERA_ROLL_FETCH_PHOTOS_SUCCESS',
        'CAMERA_ROLL_FETCH_PHOTOS_FAILURE'
      ],
      asyncTask: async state => {
        try {
          const { cameraRoll } = state;

          const paths = keys(initialParams);
          const params = pick(cameraRoll, paths);

          const permission = await requestCameraRollPermission();
          if (permission) {
            return CameraRoll.getPhotos(params);
          }
          return {};
        } catch (err) {
          console.warn(err);
        }
      }
    });
}

export function clearPhotos() {
  return (dispatch, getState) =>
    dispatch({
      type: 'CAMERA_ROLL_CLEAR_PHOTOS'
    });
}
