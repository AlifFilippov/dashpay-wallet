/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import connect from 'react-redux/es/connect/connect';
import { View, Text, Button } from 'react-native';
import { SelectableList } from 'components';
import styles from './styles';
import selector from './selectors';
import actions from './actions';
import { ALTERNATIVE_CURRENCIES } from 'constants';

import type { ReactElement, State, Props } from './types';

class SettingsAlternativeCurrencyScreen extends React.PureComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    const { currentAlternativeCurrencyCode } = props;
    const currencyOptions = ALTERNATIVE_CURRENCIES.map(({ code, name }) => ({
      code,
      key: code,
      name,
      selected: code === currentAlternativeCurrencyCode
    }));
    this.state = { currencyOptions };
  }

  async handleSelection(currency) {
    const { code } = currency;
    const {
      changeAlternativeCurrency,
      fetchAlternativeCurrencyRateIfNeeded,
      navigation,
      componentId
    } = this.props;
    changeAlternativeCurrency(code);
    fetchAlternativeCurrencyRateIfNeeded();
    navigation.pop(componentId);
  }

  renderItem({ name }): ReactElement {
    return <Text>{name}</Text>;
  }

  render(): ReactElement {
    const { currencyOptions } = this.state;
    return (
      <View style={styles.container}>
        <SelectableList
          data={currencyOptions}
          renderItem={this.renderItem}
          onItemPress={this.handleSelection}
        />
      </View>
    );
  }
}

const connectedSettingsAlternativeCurrencyScreen = connect(
  selector,
  actions
)(SettingsAlternativeCurrencyScreen);

export default connectedSettingsAlternativeCurrencyScreen;
