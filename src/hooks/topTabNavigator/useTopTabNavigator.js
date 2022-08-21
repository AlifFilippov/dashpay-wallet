import { createMaterialTopTabNavigator } from 'react-navigation';

const config = {
  cardStyle: {
    backgroundColor: 'white',
  },
  containerStyle: {
    backgroundColor: 'white',
  },
  tabBarOptions: {
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 16,
    },
    indicatorStyle: {
      backgroundColor: 'white',
    },
    style: {
      backgroundColor: '#088BE2',
    },
  },
};

const useTopTabNavigator = (
  routes,
  configOverrides,
) => createMaterialTopTabNavigator(routes, { ...config, ...configOverrides });

export default useTopTabNavigator;
