/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { connect } from 'react-redux';

import { Screen } from './components';
import defaultProps from './props';
import initialState from './state';
import actions from './actions';
import selector from './selectors';

class CameraRollScreen extends React.Component<any, any> {
  static defaultProps = defaultProps;
  static initialState = initialState;

  constructor(props: Props) {
    super(props);
    this.state = this.constructor.initialState;
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    if (this.props.hasMore && !this.props.isFetching) {
      this.props.fetchPhotos();
    }
  }

  goBack = event => {
    this.props.navigation.goBack();
  };

  goToCameraScreen = event => {
    this.props.navigation.navigate('CameraScreen');
  };

  handleSubmit(image) {
    this.props.navigation.getParam('onSelect')(image);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Screen
        {...this.props}
        onSubmit={this.handleSubmit}
        fetchPhotos={this.fetchPhotos}
        goToCameraScreen={this.goToCameraScreen}
        goBack={this.goBack}
      />
    );
  }
}

export default connect(
  selector,
  actions
)(CameraRollScreen);
