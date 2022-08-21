import { createSelector } from 'reselect';
import { selectCameraRoll } from 'state/cameraRoll/selectors';

const cameraRollSelector = createSelector(
  selectCameraRoll,
  cameraRoll => cameraRoll,
);

export default cameraRollSelector;
