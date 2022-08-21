import { bindActionCreators } from 'redux';
import {
  changeAlternativeCurrency,
  fetchAlternativeCurrencyRateIfNeeded,
} from 'state/alternativeCurrency/actions';

export default dispatch => bindActionCreators({
  changeAlternativeCurrency,
  fetchAlternativeCurrencyRateIfNeeded,
}, dispatch);
