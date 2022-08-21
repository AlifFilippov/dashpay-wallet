// @flow
import { bindActionCreators } from 'redux';
import { initializeWallet } from 'state/actions';
import {
  invalidateAlternativeCurrencyRate,
  fetchAlternativeCurrencyRateIfNeeded,
} from 'state/alternativeCurrency/actions';
import { getByBUsername } from 'state/profiles/actions';
import { setDpaInitialized } from 'state/account/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      initializeWallet,
      invalidateAlternativeCurrencyRate,
      fetchAlternativeCurrencyRateIfNeeded,
      getByBUsername,
      setDpaInitialized,
    },
    dispatch,
  );
}

export default actions;
