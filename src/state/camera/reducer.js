/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import { CAMERA_TOGGLE_TYPE } from './constants';
import { CAMERA_TOGGLE_FLASH_MODE } from './constants';
import { CAMERA_TOGGLE_WHITE_BALANCE } from './constants';

const typeOptions = [
  // RNCamera.Constants.Type.front,
  // RNCamera.Constants.Type.back,
  1,
  0
];

const typeIcons = ['camera-front', 'camera-back'];

const flashModeOptions = [
  // RNCamera.Constants.FlashMode.auto,
  // RNCamera.Constants.FlashMode.on,
  // RNCamera.Constants.FlashMode.off,
  3,
  1,
  0
];

const flashModeIcons = [
  'camera-flash-auto',
  'camera-flash-on',
  'camera-flash-off'
];

const whiteBalanceOptions = [
  // RNCamera.Constants.WhiteBalance.auto,
  // RNCamera.Constants.WhiteBalance.sunny,
  // RNCamera.Constants.WhiteBalance.cloudy,
  // RNCamera.Constants.WhiteBalance.shadow,
  // RNCamera.Constants.WhiteBalance.incandescent,
  // RNCamera.Constants.WhiteBalance.fluorescen,
  0,
  2,
  1,
  3,
  5,
  undefined
];

const whiteBalanceIcons = ['1', '2', '3', '4', '5', '6'];

function getNextOptionIndex(options, currOption) {
  return (
    (options.findIndex(option => option === currOption) + 1) % options.length
  );
}

const initialState = {
  type: 1,
  typeIcon: 'camera-front',
  flashMode: 3,
  flashModeIcon: 'camera-flash-auto',
  whiteBalance: 0,
  whiteBalanceIcon: '1'
};

const camera = (state = initialState, action) => {
  let index;

  switch (action.type) {
    case CAMERA_TOGGLE_TYPE:
      index = getNextOptionIndex(typeOptions, state.type);
      return {
        ...state,
        type: typeOptions[index],
        typeIcon: typeIcons[index]
      };

    case CAMERA_TOGGLE_FLASH_MODE:
      index = getNextOptionIndex(flashModeOptions, state.flashMode);
      return {
        ...state,
        flashMode: flashModeOptions[index],
        flashModeIcon: flashModeIcons[index]
      };

    case CAMERA_TOGGLE_WHITE_BALANCE:
      index = getNextOptionIndex(whiteBalanceOptions, state.whiteBalance);
      return {
        ...state,
        whiteBalance: whiteBalanceOptions[index],
        whiteBalanceIcon: whiteBalanceIcons[index]
      };

    default:
      return state;
  }
};
export default camera;
