import { createSelector } from 'reselect';
import { languageSelector } from 'state/language/selectors';

export default createSelector(languageSelector, locale => ({ locale }));
