import { createSelector } from 'reselect';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';

export default createSelector(
  alternativeCurrencySelector, ({ code }) => ({ currentAlternativeCurrencyCode: code })
);
