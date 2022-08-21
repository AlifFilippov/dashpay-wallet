/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { CAMERA_TOGGLE_TYPE } from './constants';
import { CAMERA_TOGGLE_FLASH_MODE } from './constants';
import { CAMERA_TOGGLE_WHITE_BALANCE } from './constants';

export const toggleType = () => ({
  type: CAMERA_TOGGLE_TYPE
});

export const toggleFlashMode = () => ({
  type: CAMERA_TOGGLE_FLASH_MODE
});

export const toggleWhiteBalance = () => ({
  type: CAMERA_TOGGLE_WHITE_BALANCE
});
