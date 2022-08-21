// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import Form from 'components/Form';
import View from 'components/View';
import Text from 'components/Text';
import Image from 'react-native-fast-image';

import AutoSubmit from 'components/AutoSubmit';

import dashLogo from 'assets/flags/dash.png';
import RecipientField from './components/RecipientField';
import selector from './selectors';
import defaults from './defaults';
import styles from './styles';
import type { Props, State } from './types';


class AddressPaymentScreen extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);
    const onSubmit = this.handleSubmit.bind(this);
    this.state = {
      ...props.formProps,
      onSubmit,
    };
  }

  handleSubmit(values: Object) {
    const { navigation } = this.props;
    navigation.replace('ContactScreen', values);
  }


  render(): React.Element<any> {
    return (
      <Form {...this.state}>
        <View style={styles.container}>
          <View style={styles.body}>
            <Image
              style={styles.dash}
              source={dashLogo}
            />
            <View style={styles.row}>
              <Text style={styles.title}>Pay Address</Text>
            </View>
            <View style={styles.row}>
              <RecipientField />
            </View>
            <View style={styles.row}>
              <AutoSubmit />
            </View>
          </View>
        </View>
      </Form>
    );
  }
}

export default connect(selector)(AddressPaymentScreen);
