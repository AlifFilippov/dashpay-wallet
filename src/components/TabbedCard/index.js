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
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { connect } from 'react-redux';
import { Avatar } from 'components';
import { CustomTabBar, DisappearingHeaderPart } from './components';
import styles from './styles';
import selectors from './selectors';
import actions from './actions';

class TabbedCard extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.scrollOffset = new Animated.Value(0);
    this.pageScrollOffsets = new Map();
    this.pageRefs = new Map();
    this.headerHeight = this.props.disappearingHeaderHeight + this.props.persistentHeaderHeight;
  }

  static defaultProps = {
    disappearingHeaderHeight: 0,
    persistentHeaderHeight: 100
  }

  componentDidMount() {

  }

  scrollListener(index) {
    return (event)=> {
      this.scrollOffset.setValue(event.nativeEvent.contentOffset.y);
      this.pageScrollOffsets.set(index, event.nativeEvent.contentOffset.y);
    }
  }

  pageChangeListener = (position) => {
    let headerScrollAmount = Math.min(this.scrollOffset._value, this.props.disappearingHeaderHeight || 0);
    let right = this.pageRefs.get(Math.ceil(position));
    let rightOffset = this.pageScrollOffsets.get(Math.ceil(position)) || 0;
    if (right && rightOffset <= this.props.disappearingHeaderHeight) {
      right.scrollTo({y: headerScrollAmount, animated: false});
    }
    let left = this.pageRefs.get(Math.floor(position));
    let leftOffset = this.pageScrollOffsets.get(Math.floor(position)) || 0;
    if (left && leftOffset <= this.props.disappearingHeaderHeight) {
      left.scrollTo({y: headerScrollAmount, animated: false});
    }
  }

  render() {
    return (
      <View style={styles.card}>
        <ScrollView
          renderTabBar={
            () => <CustomTabBar
              scrollOffsets={this.scrollOffset}
              header={
                <View style={styles.header}>
                  <DisappearingHeaderPart
                    scrolledDistance={this.scrollOffset}
                    initialHeight={this.props.disappearingHeaderHeight}
                  >
                    {this.props.disappearingHeaderPart}
                  </DisappearingHeaderPart>
                  {this.props.persistentHeaderPart}
                </View>
              }
            />
          }
          initialPage={0}
          prerenderingSiblingsNumber={1}
          onScroll={this.pageChangeListener}
          tabBarPosition='overlayTop'
        >
          {
            this.props.children.map((child, index) =>
              <ScrollView
                tabLabel={child.props.tabLabel || 'Tab ' + index}
                key={index}
                ref={(ref)=>{this.pageRefs.set(index, ref)}}
                onScroll={this.scrollListener(index)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop: this.headerHeight}}
              >
                { child }
              </ScrollView>
            )
          }
        </ScrollView>
      </View>
    );
  }

  // onSettingsPressed() {
  //   return this.props.navigation.navigate('SettingsScreen');
  // }
}

let connectedTabbedCard = connect(
  selectors,
  actions
)(TabbedCard);

export default connectedTabbedCard;
