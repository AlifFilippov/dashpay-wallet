/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { CameraRoll } from 'react-native';
import { connect } from 'react-redux';

// Internal
import Text from 'components/Text';
import { Screen } from './components';
import defaultProps from './defaults';
import actions from './actions';
import selector from './selectors';

class CameraScreen extends React.Component<any, any> {
  static defaultProps = defaultProps;

  constructor(props: Props) {
    super(props);
    this.camera = React.createRef();
    this.goBack = this.goBack.bind(this);
    this.onCameraReady = this.onCameraReady.bind(this);
    this.takePicture = this.takePicture.bind(this);
    this.state = {
      isReady: false
    };
  }

  componentDidMount() {
    // this.props.requestCameraPermission();
  }

  onCameraReady() {
    this.setState({ isReady: true });
  }

  goBack() {
    this.props.navigation.goBack();
  }

  async takePicture() {
    if (this.camera.current) {
      const camera = this.camera.current;
      const picture = await camera.takePictureAsync();
      await CameraRoll.saveToCameraRoll(picture.uri);
      this.props.clearPhotos();
      this.props.fetchPhotos();
      Navigation.pop(this.props.componentId);
    }
  }

  render() {
    return (
      <Screen
        {...this.props}
        {...this.state}
        takePicture={this.takePicture}
        onCameraReady={this.onCameraReady}
        goBack={this.goBack}
        camera={this.camera}
      />
    );
  }
}

CameraScreen = connect(
  selector,
  actions
)(CameraScreen);

export default CameraScreen;
