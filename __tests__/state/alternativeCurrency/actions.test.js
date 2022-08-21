import { CHANGE_ALTERNATIVE_CURRENCY } from 'state/alternativeCurrency/constants';
import { changeAlternativeCurrency } from 'state/alternativeCurrency/actions';

describe('alternativeCurrency actions', () => {
  it('should create an action to set the new alternative currency', () => {
    const expectedAction = {
      type: CHANGE_ALTERNATIVE_CURRENCY,
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
    };
    expect(changeAlternativeCurrency('USD')).toEqual(expectedAction);
  });
});
