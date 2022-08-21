/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'components';
import { IconButton } from 'components';
import { Animation } from 'components';
import { SwipeableRow } from 'components';
import styles from './styles';
import selectors from './selectors';
import actions from './actions';
const settingIconFile = require('../../../assets/images/icon-settings.png');

class NavBar extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.onLayout = this.onLayout.bind(this);
    // let val = account.getBalance() = 694987737;
    // account.events.on('balance_changed', () => {})
    this.state = {
      width: 200,
      text: 'This is a test',
      index: 0,
      count: 2
    };
    this._onPress = this._onPress.bind(this);
    this.onSettingsPressed = this.onSettingsPressed.bind(this);
    this.animation = React.createRef();
    this.swipeableRow = React.createRef();
  }

  _getMaxSwipeDistance(info: Object): number {
    return this.state.width;
  }

  _onOpen() {}

  _onClose() {}

  _setListViewScrollableTo(value: boolean) {
    if (this._flatListRef) {
      this._flatListRef.setNativeProps({
        scrollEnabled: value
      });
    }
  }

  _setListViewScrollable = () => {
    this._setListViewScrollableTo(true);
  };

  _setListViewNotScrollable = () => {
    this._setListViewScrollableTo(false);
  };

  onLayout(event) {
    const {
      nativeEvent: {
        layout: { x, y, width, height }
      }
    } = event;
    this.setState({ width });
  }

  async _onPress() {
    await this.animation.current.scaleOut();
    this.setState(
      ({ index, count }) => ({
        index: (index + 1) % count
      }),
      async () => {
        await this.animation.current.scaleIn();
        if (this.state.index === 0) {
          this.swipeableRow.current._animateTo(0);
        }
        if (this.state.index === 2) {
          this.swipeableRow.current._animateTo(-this.state.width);
        }
      }
    );
  }

  render() {
    const { alternativeCurrency } = this.props;
    const {
      amount: { part1, part2 }
    } = this.props.items[this.state.index];

    const dashIcon = <Icon style={styles.icon} name={'dash'} />;
    const alternativeCurrencyIcon = (
      <Text style={styles.icon}>{alternativeCurrency.symbol}</Text>
    );
    const iconButton = (
      <Animation ref={this.animation}>
        {this.state.index ? alternativeCurrencyIcon : dashIcon}
      </Animation>
    );

    return (
      <View style={styles.navbar}>
        <SwipeableRow
          slideoutView={iconButton}
          ref={this.swipeableRow}
          isOpen={false}
          maxSwipeDistance={this._getMaxSwipeDistance()}
          onOpen={() => this._onOpen()}
          onClose={() => this._onClose()}
          shouldBounceOnMount={false}
          onSwipeEnd={this._setListViewScrollable}
          onSwipeStart={this._setListViewNotScrollable}>
          <TouchableWithoutFeedback style={styles.icon} onPress={this._onPress}>
            <View style={styles.row}>
              <View style={styles.inline} onLayout={this.onLayout}>
                <Text style={styles.part1} numberOfLines={1}>
                  {part1}
                </Text>
                <Text style={styles.part2} numberOfLines={1}>
                  {part2}
                </Text>
                <Text style={styles.part2} numberOfLines={1}>
                  (1DASH = {alternativeCurrency.rate}
                  {alternativeCurrency.code})
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SwipeableRow>
        <View style={styles.settingsIcon}>
          <IconButton
            source={settingIconFile}
            action={() => this.onSettingsPressed()}
          />
        </View>
      </View>
    );
  }

  onSettingsPressed() {
    return this.props.navigation.navigate('SettingsScreen');
  }
}

NavBar = connect(
  selectors,
  actions
)(NavBar);

export default NavBar;
