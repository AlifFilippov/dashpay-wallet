/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { slice } from 'lodash';
import { FlatList } from 'react-native';
import { Item } from './components';

const defaultProps = {
  removeClippedSubviews: true,
  initialNumToRender: 15,
  numColumns: 3,
  selected: []
};

const styles = {
  contentContainerStyle: {
    backgroundColor: '#fff',
    paddingBottom: 1.5,
    paddingTop: 1.5
  },
  columnWrapperStyle: {
    marginRight: -1.5,
    marginLeft: -1.5
  }
};

import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const itemSize = (DEVICE_WIDTH - 4) / 3;

class SelectableList extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  keyExtractor = (item: Object): string => item.uri;

  getItemLayout = (data, index): Object => ({
    offset: itemSize * index,
    length: itemSize,
    index
  });

  getItemIndex = (item: Object): void => {
    const callback = obj => obj.uri === item.uri;
    return this.props.values.selected.findIndex(callback);
  };

  setItems = (items: Array<Object>): void => {
    this.props.setFieldValue('selected', items);
  };

  addItem = (item: Object): void => {
    this.setItems(slice([...this.props.values.selected, item], 0, 4));
  };

  removeItem = (item: Object): void => {
    const callback = obj => obj.uri !== item.uri;
    this.setItems(this.props.values.selected.filter(callback));
  };

  isItemSelected = (item: Object): boolean => {
    const callback = obj => obj.uri === item.uri;
    return this.props.values.selected.some(callback);
  };

  handleOnPressItem = (item: Object): void => {
    const isItemSelected = this.isItemSelected(item); // $FlowFixMe
    this[isItemSelected ? 'removeItem' : 'addItem'](item);
  };

  renderItem = ({ item }): any => {
    const props = Object.assign({}, { item });
    props.index = this.getItemIndex(item);
    props.selected = this.isItemSelected(item);
    props.onPressItem = this.handleOnPressItem;
    return <Item {...props} />;
  };

  render(): ReactElement {
    const { props } = this;
    return (
      <FlatList
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        data={props.photos}
        initialNumToRender={props.initialNumToRender}
        extraData={this.props.values.selected}
        keyExtractor={this.keyExtractor}
        numColumns={props.numColumns}
        onEndReached={props.fetchPhotos}
        removeClippedSubviews={props.removeClippedSubviews}
        renderItem={this.renderItem}
      />
    );
  }
}

export default SelectableList;
