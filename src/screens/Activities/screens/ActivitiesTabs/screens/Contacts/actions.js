import { bindActionCreators } from 'redux';
import {
  acceptContactRequest,
  rejectContactRequest,
} from 'state/profiles/actions';

const actions = dispatch => bindActionCreators({
  acceptContactRequest, rejectContactRequest,
}, dispatch);

export default actions;
