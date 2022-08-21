import { bindActionCreators } from 'redux';
import {
  setFilter,
  clearFilter,
  getContacts,
  searchProfiles,
} from 'state/profiles/actions';

export default dispatch => bindActionCreators({
  getContacts,
  setFilter,
  clearFilter,
  searchProfiles,
}, dispatch);
