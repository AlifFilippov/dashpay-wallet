import { bindActionCreators } from 'redux';
import { changeBalanceVisible } from 'state/settings/actions';

function actions(dispatch) {
  return bindActionCreators({ changeBalanceVisible }, dispatch);
}

export default actions;
