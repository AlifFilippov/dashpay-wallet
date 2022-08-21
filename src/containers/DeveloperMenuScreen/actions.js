// @flow
import { bindActionCreators } from 'redux';
import {
  setMnemonic,
  setUsername,
  createAccount,
} from 'state/account/actions';

export default (dispatch: Function): Object => bindActionCreators({
  setMnemonic,
  setUsername,
  createAccount,
}, dispatch);
