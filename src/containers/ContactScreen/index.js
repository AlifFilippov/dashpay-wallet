import useTopTabNavigator from 'hooks/topTabNavigator/useTopTabNavigator';

import PayTab from './containers/PayTab';
import ReceiveTab from './containers/ReceiveTab';
import ProfileTab from './containers/ProfileTab';

const routes = {
  PayTab: {
    screen: PayTab,
    navigationOptions: {
      tabBarLabel: 'Pay',
    },
  },
  ReceiveTab: {
    screen: ReceiveTab,
    navigationOptions: {
      tabBarLabel: 'Receive',
    },
  },
  ProfileTab: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  },
};

const ContactScreenNavigationContainer = useTopTabNavigator(routes, {
  initialRouteName: 'ProfileTab',
});

export const PayTabs = useTopTabNavigator(routes);

export default ContactScreenNavigationContainer;
