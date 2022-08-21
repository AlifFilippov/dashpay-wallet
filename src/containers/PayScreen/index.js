// @flow
import useTopTabNavigator from 'hooks/topTabNavigator/useTopTabNavigator';
import AddressPaymentScreen from './containers/AddressPaymentScreen';
import ScannerScreen from './containers/ScannerScreen';
import ContactsPaymentScreen from './containers/ContactsPaymentScreen';

const routes = {
  ContactsPaymentTab: {
    screen: ContactsPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Contacts',
    },
  },
  QRCodePaymentTab: {
    screen: ScannerScreen,
    navigationOptions: {
      tabBarLabel: 'QRCode',
    },
  },
  AddressPaymentTab: {
    screen: AddressPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'Address',
    },
  },
};

const PayScreenNavigationContainer = useTopTabNavigator(routes, {
  initialRouteName: 'AddressPaymentTab',
});

export default PayScreenNavigationContainer;
