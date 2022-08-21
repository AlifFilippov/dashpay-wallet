/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import defaultProps from './props';
import styles from './styles';

type Props = {};
type State = {};

class ProgressBar extends React.PureComponent<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidUpdate(props) {
    if (props.value !== this.props.value) {
      Animated.spring(
        // Animate value over time
        this.progress, // The value to drive
        {
          toValue: this.props.value
        }
      ).start(endState => {
        if (this.props.value === 100 && endState.finished) {
          this.props.onComplete();
        }
      });
    }
  }

  _onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    });
  };

  renderProgressBar(): React.Element<any> {
    const { width, height } = this.state;
    const animations = {
      backgroundColor: '#fff',
      width,
      transform: [
        {
          translateX: this.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [width / -2, 0],
            extrapolate: 'clamp'
          })
        },
        {
          scaleX: this.progress.interpolate({
            inputRange: [0, 100],
            outputRange: [0.0001, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
    return <Animated.View style={[styles.progressBar, animations]} />;
  }

  render(): React.Element<any> {
    return (
      <View onLayout={this._onLayout} style={styles.progress}>
        {this.renderProgressBar()}
      </View>
    );
  }
}

export default ProgressBar;
