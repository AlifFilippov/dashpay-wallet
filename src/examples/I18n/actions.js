import { bindActionCreators } from 'redux';
import { changeLocale } from 'state/language/actions';

export default dispatch => bindActionCreators({ changeLocale }, dispatch);
