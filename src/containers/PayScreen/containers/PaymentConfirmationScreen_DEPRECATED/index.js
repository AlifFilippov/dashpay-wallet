/* eslint-disable */
/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Animated } from 'react-native';
import { Avatar, Icon } from 'components';
import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import styles from './styles';
import type { ReactElement } from './types';
import type { Props } from './types';
import type { StateType } from './types';
import { connect } from 'react-redux';
// import selector from './selectors';
// import actions from './actions';

class SwipeComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      maxSwipeDistance: 10,
      width: 10,
    }
    this._swipeDistance = new Animated.Value(0);
    this._swipeDistance.addListener(({ value }) => {
      this._swipeDistanceValue = value;
    });
    this._onPanGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._swipeDistance,
          },
        },
      ],
      { useNativeDriver: true }
    );
  }

  _onLayout = event => {
    this.setState({
      width: event.nativeEvent.layout.width,
      maxSwipeDistance: event.nativeEvent.layout.width - 50 - 16,
    });
  }

  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const springProperties = {
        velocity: 20,
        tension: 60,
        friction: 10,
        useNativeDriver: true
      };
      if (this._swipeDistanceValue < this.state.maxSwipeDistance - 25) {
        // not enough of a swipe
        Animated.spring(this._swipeDistance, {
          ...springProperties,
          toValue: 0,
        }).start();
      } else {
        // they swiped like they meant it
        Animated.spring(this._swipeDistance, {
          ...springProperties,
          toValue: this.state.maxSwipeDistance,
        }).start(
          () => { // callback, called after the animation finishes
            if (this.props.onConfirmation && typeof this.props.onConfirmation === 'function') {
              this.props.onConfirmation();
            }
          }
        );
      }
    }
  };

  render(): ReactElement {
    const {
      toAvatar = require('assets/images/avatar-default.png'),
      fromAvatar =  require('assets/images/avatar-default.png'),
    } = this.props;
    return (
      <PanGestureHandler
        onGestureEvent={this._onPanGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View style={styles.swipeArea} onLayout={this._onLayout}>
          <Animated.View style={[styles.swipeMovablePart, {
            transform: [{
              translateX: this._swipeDistance.interpolate({
                inputRange: [0, this.state.maxSwipeDistance],
                outputRange: [0, this.state.maxSwipeDistance],
                extrapolate: 'clamp',
              })
            }]
          }]}>
            <Avatar source={fromAvatar} style={styles.swipeAvatar} />
          </Animated.View>
          <Text style={styles.swipeText}>Swipe to Pay</Text>
          <Animated.View style={{
            transform: [{
              scale: this._swipeDistance.interpolate({
                inputRange: [0, this.state.maxSwipeDistance],
                outputRange: [0.5, 1],
                extrapolate: 'clamp',
              })
            }]
          }}>
            <Avatar source={toAvatar}
              style={styles.swipeAvatar} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

class PaymentConfirmationScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): ReactElement {
    const
      fiatSymbol = this.props.navigation.getParam('fiatSymbol'),
      amountDash = this.props.navigation.getParam('amountDash'),
      amountFiat = this.props.navigation.getParam('amountFiat'),
      feeDash = this.props.navigation.getParam('feeDash'),
      feeFiat = this.props.navigation.getParam('feeFiat'),
      totalFiat = this.props.navigation.getParam('totalFiat'),
      destinationAddress = this.props.navigation.getParam('destinationAddress'),
      toAvatar = this.props.navigation.getParam('toAvatar'),
      fromAvatar = this.props.navigation.getParam('fromAvatar'),
      onConfirmation = this.props.navigation.getParam('onConfirmation');

    return (
      <View style={styles.backdrop}>
        <View style={styles.containerContainer}>
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Avatar source={toAvatar}
                style={styles.topAvatar} />
            </View>
            <View style={styles.header}>
              <Text style={styles.titleText}>Pay</Text>
              <Text style={styles.fiatBeforeFee}><Icon style={styles.fiatBeforeFee} name={fiatSymbol} />{amountFiat}</Text>
            </View>
            <View style={styles.inset}>
              <Text style={styles.insetHeader}>Sending</Text>
              <Text style={styles.insetValue}><Icon style={styles.insetValue} name={'dash'} />{amountDash}</Text>
              <Text style={styles.insetHeader}>Network Fee</Text>
              <Text style={styles.insetValue}><Icon style={styles.insetValue} name={'dash'} />{feeDash}</Text>
            </View>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalFiat}><Icon style={styles.totalFiat} name={fiatSymbol} />{totalFiat}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.chevron}></View>
            <Text style={styles.address}>{destinationAddress}</Text>
          </View>
        </View>
        <SwipeComponent toAvatar={toAvatar} fromAvatar={fromAvatar} onConfirmation={onConfirmation} />
      </View>
    );
  }
}

// PaymentConfirmationScreen = connect(
//   selector,
//   actions
// )(PaymentConfirmationScreen);

export default PaymentConfirmationScreen;
