/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// Internal dependencies
import ActivitiesTabs from '../screens/ActivitiesTabs';

const routes = {
  Activities: {
    screen: ActivitiesTabs,
    navigationOptions: {
      title: 'Activity',
      params: null,
    },
  },
};

export default routes;
