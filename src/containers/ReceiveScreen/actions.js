import { bindActionCreators } from 'redux';
import { getUnusedAddress } from 'state/account/actions';

function actions(dispatch) {
  return bindActionCreators({ getUnusedAddress }, dispatch);
}

export default actions;
