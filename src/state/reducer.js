// @flow
import { combineReducers } from 'redux';
import camera from './camera';
import cameraRoll from './cameraRoll';
import account from './account/reducer';
import settings from './settings';
import payment from './payment';
import alternativeCurrency from './alternativeCurrency/reducer';
import language from './language';
import transactions from './transactions';
import payments from './payments/reducer';
import profiles from './profiles/reducer';
import user from './user/reducer';

export default combineReducers({
  camera,
  cameraRoll,
  account,
  transactions,
  settings,
  payment,
  alternativeCurrency,
  language,
  payments,
  profiles,
  user,
});
