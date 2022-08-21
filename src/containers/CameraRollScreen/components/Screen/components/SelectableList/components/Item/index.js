/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Image } from 'react-native';
import Touchable from 'components/Touchable';
import View from 'components/View';
import styles from './styles';

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).handleOnPress = this.handleOnPress.bind(this);
  }

  shouldComponentUpdate(nextProps: Props) {
    return this.props.selected !== nextProps.selected;
  }

  handleOnPress(event: Object) {
    this.props.onPressItem(this.props.item);
  }

  render() {
    const source = this.props.item;
    const checked = this.props.selected;
    return (
      <Touchable onPress={this.handleOnPress} style={styles.card}>
        <View style={styles.body}>
          <Image source={source} style={styles.image} />
        </View>
      </Touchable>
    );
  }
}

export default Item;
