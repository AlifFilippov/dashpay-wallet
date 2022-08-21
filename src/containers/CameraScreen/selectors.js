import { createSelector } from 'reselect';
import { selectCamera } from 'state/camera/selectors';

const cameraSelector = createSelector(selectCamera, camera => camera);

export default cameraSelector;
