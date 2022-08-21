import { bindActionCreators } from 'redux';
import { registerBUser } from 'state/account/actions';
import { registerProfile } from 'state/profiles/actions';

const actions = dispatch => bindActionCreators({
  registerBUser,
  registerProfile,
}, dispatch);

export default actions;
