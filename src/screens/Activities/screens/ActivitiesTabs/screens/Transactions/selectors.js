import { createStructuredSelector } from 'reselect';

import { selectTransactions } from 'state/transactions';

export default createStructuredSelector({
  transactions: selectTransactions,
});
