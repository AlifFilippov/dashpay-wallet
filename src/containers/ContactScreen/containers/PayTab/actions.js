// @flow
import { bindActionCreators } from 'redux';
import { fetchAlternativeCurrencyRateIfNeeded } from 'state/alternativeCurrency/actions';
import { createSendPaymentTransaction } from 'state/payments/send/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({
    fetchAlternativeCurrencyRateIfNeeded,
    createSendPaymentTransaction,
  }, dispatch);
}

export default actions;
