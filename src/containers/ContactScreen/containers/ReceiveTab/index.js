// @flow

import { connect } from 'react-redux';

import Transactions from './components/Transactions';
import selector from './selectors';

export default connect(selector)(Transactions);
