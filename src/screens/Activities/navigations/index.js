/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { createStackNavigator } from 'react-navigation';

// Internal dependencies
import routes from './routes';
import config from './config';

export default createStackNavigator(routes, config);
