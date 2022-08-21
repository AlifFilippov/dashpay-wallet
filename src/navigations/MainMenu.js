// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FormattedNumber } from 'react-intl';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import { Logo } from 'components';
import { balanceSelector } from 'state/account/selectors';
import { alternativeCurrencySelector } from 'state/alternativeCurrency/selectors';
import type { NavigationProps } from 'types/navigation';

import ParallaxScrollView from './tmp';

const styles = {
  container: {
    position: 'relative',
    backgroundColor: '#211F24',
    borderColor: '#211F24',
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
  },
  header: {},
  logo: {
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 48,
    marginBottom: 0,
    width: 210,
    height: 70,
  },
  item: {
    marginBottom: 0,
    marginTop: 4,
    alignItems: 'center',
    backgroundColor: '#2A282B',
    borderColor: '#2A282B',
    borderRadius: 3,
    borderWidth: 0,
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 32,
    paddingRight: 32,
    position: 'relative',
  },
  itemText: {
    color: '#666469',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 0,
  },
  amount: {
    paddingBottom: 48,
    paddingTop: 48,
  },
  dashIcon: {
    color: '#EFEEF1',
    fontSize: 27,
    marginRight: 8,
  },
  dashText: {
    color: '#EFEEF1',
    fontSize: 27,
  },
  fiatIcon: {
    color: '#3C3B40',
    fontSize: 19,
    marginRight: 8,
  },
  fiatText: {
    color: '#3C3B40',
    fontSize: 19,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    color: '#666469',
    fontSize: 18,
  },
};

type Props = NavigationProps & {
  balance: number,
  hideMenu: Function,
  alternativeCurrency: {
    code: string,
    rate: ?number,
  },
}

const MainMenu = ({
  alternativeCurrency, balance, hideMenu, navigation,
}: Props) => {
  const newBalance = (balance || 0) / 100000000;
  const { code, rate } = alternativeCurrency;
  const dashAmount = newBalance;
  const fiatAmount = newBalance * rate;
  const dashSymbol = 'dash';
  const fiatSymbol = code.toLowerCase();
  const clickNavBuilder = routeName => () => {
    hideMenu();
    navigation.navigate(routeName);
  };
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        renderHeader={() => (
          <View style={styles.header}>
            <View style={styles.row}>
              <Logo style={styles.logo} />
            </View>
            <View style={styles.amount}>
              <View style={styles.row}>
                <Icon style={styles.dashIcon} name={dashSymbol} />
                <FormattedNumber
                  value={dashAmount}
                  minimumFractionDigits={7}
                  maximumFractionDigits={7}
                >
                  {value => <Text style={styles.dashText}>{value}</Text>}
                </FormattedNumber>
              </View>
              <View style={styles.row}>
                <Icon style={styles.fiatIcon} name={fiatSymbol} />
                <FormattedNumber
                  value={fiatAmount}
                  minimumFractionDigits={2}
                  maximumFractionDigits={2}
                >
                  {value => <Text style={styles.fiatText}>{value}</Text>}
                </FormattedNumber>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={hideMenu}>
              <Icon style={styles.buttonIcon} name="times" />
            </TouchableOpacity>
          </View>
        )}
        renderBody={() => (
          <View style={styles.body}>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={clickNavBuilder('DeveloperMenuScreen')}>
              <Text style={styles.itemText}>Developer Menu Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={clickNavBuilder('RegistrationScreen')}>
              <Text style={styles.itemText}>User Registration Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>Menu item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const selector = createSelector(
  alternativeCurrencySelector,
  balanceSelector,
  (alternativeCurrency, balance) => ({
    alternativeCurrency,
    balance,
  }),
);

export default connect(selector)(MainMenu);
