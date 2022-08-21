// @flow
import * as React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

import { Text, View } from 'components';

import styles from './styles';
import type { Props, State } from './types';
import selector from './selectors';
import actions from './actions';
import CopyButton from './components/CopyButton';

const logoFile = require('../../assets/images/dash_white_s.png');

const { width: viewportWidth } = Dimensions.get('window');
const qrWidth = viewportWidth - 20;

class ReceiveScreen extends React.Component<Props, State> {
  componentDidMount() {
    const { getUnusedAddress } = this.props;
    getUnusedAddress();
  }

  writeAddressToClipboard = async () => {
    const { unusedAddress } = this.props;
    await Clipboard.setString(unusedAddress);
    alert('Address copied!');
  };

  render(): React.Element<any> {
    const { unusedAddress } = this.props;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.qrWrapper}>
          <QRCode
            value={`dash:${unusedAddress}`}
            size={qrWidth}
            backgroundColor="transparent"
            color="black"
            logo={logoFile}
            logoSize={(qrWidth * 7) / 29}
            logoMargin={qrWidth / 29}
            logoBackgroundColor="#078be2"
          />
        </View>
        <View>
          <Text selectable style={[styles.text, styles.bold]}>
            {unusedAddress}
          </Text>
          <CopyButton data={unusedAddress} />
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(
  selector,
  actions,
)(ReceiveScreen);
