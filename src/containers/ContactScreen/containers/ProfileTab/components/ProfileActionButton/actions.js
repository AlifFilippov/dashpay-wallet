import { bindActionCreators } from 'redux';
import {
  acceptContactRequest,
  sendContactRequest,
} from 'state/profiles/actions';

const actions = dispatch => bindActionCreators({
  sendContactRequest, acceptContactRequest,
}, dispatch);

export default actions;
