/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import connect from "react-redux/es/connect/connect";
import {
  View,
  Text,
  Button,
} from 'react-native';
import { SelectableList } from 'components';
import translations from 'translations';
import styles from './styles';
import selector from "./selectors";
import actions from "./actions";

import type {
  ReactElement,
  State,
  Props,
} from './types';

class SettingsLanguageScreen extends  React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection({ key }) {
    const { changeLocale, navigation, componentId } = this.props;
    changeLocale(key);
    navigation.pop(componentId);
  }

  renderItem({ languageName }): ReactElement {
    return (
      <Text>{ languageName }</Text>
    );
  }

  render(): ReactElement {
    const localeOptions = Object.keys(translations).map(
      localeCode => ({
        key: localeCode,
        languageName: translations[localeCode].languageName,
        selected: localeCode == this.props.locale,
      })
    );

    return (
      <View style={styles.container}>
        <SelectableList
          data={ localeOptions }
          renderItem={ this.renderItem }
          onItemPress={ this.handleSelection } />
      </View>
    );
  }
}

const connectedSettingsLanguageScreen = connect(
  selector,
  actions,
)(SettingsLanguageScreen);

export default connectedSettingsLanguageScreen;
