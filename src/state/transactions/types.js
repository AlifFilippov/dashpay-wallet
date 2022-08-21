/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import { User } from 'state/user/types';

export type Transaction = {
  address: string,
  amount: number,
  currency: string,
  fee: number,
  timestamp: number,
  type: string,
  conversion: {
    amount: number,
    currency: string,
    rate: number,
  },
  sender: User,
  receiver: User,
};
