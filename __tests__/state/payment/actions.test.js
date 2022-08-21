import { MAKE_PAYMENT } from 'state/payment/constants';
import { makePayment } from 'state/payment/actions';

describe('payment actions', () => {
  it('should create an action to start a new payment', () => {
    const recipient = 'recipient';
    const amount = 22;
    const expectedAction = {
      recipient,
      amount,
      type: MAKE_PAYMENT,
    };
    expect(makePayment(recipient, amount)).toEqual(expectedAction);
  });
});
