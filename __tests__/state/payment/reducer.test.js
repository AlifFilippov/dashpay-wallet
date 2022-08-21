import { MAKE_PAYMENT } from 'state/payment/constants';
import reducer from 'state/payment/reducer';

describe('payment reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ isInProgress: false });
  });

  it('should handle MAKE_PAYMENT', () => {
    const payload = { recipient: 'recipient', amount: 22 };
    expect(reducer(undefined, { type: MAKE_PAYMENT, ...payload }))
      .toEqual({ ...payload, isInProgress: true });
  });
});
