// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from 'components';
import ScrollView from 'components/ScrollView';
import Form from 'components/Form';
import View from 'components/View';
import SlideInUp from './components/SlideInUp';
import ProfilePicture from './components/ProfilePicture';
import AmountField from './components/AmountField';
import Transactions from './components/Transactions';
import defaults from './defaults';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
import type { Props, State } from './types';

class PayTab extends React.Component<Props, State> {
  static defaultProps = defaults;

  constructor(props: Props) {
    super(props);

    const {
      alternativeCurrency: { rate },
    } = props;

    this.state = {
      convertToDashAmount: fiatAmount => fiatAmount / rate,
      convertToFiatAmount: dashAmount => dashAmount * rate,
      validationSchema: props.validationSchema,
      initialValues: props.initialValues,
      onSubmit: this.onSubmit,
    };
  }

  componentDidMount() {
    const { fetchAlternativeCurrencyRateIfNeeded } = this.props;
    fetchAlternativeCurrencyRateIfNeeded();
  }

  onSubmit = (values, form) => {
    const {
      navigation, createSendPaymentTransaction, receiver, sender,
    } = this.props;
    navigation.navigate('Confirm', {
      fiatSymbol: 'usd',
      dashAmount: values.dashAmount,
      fiatAmount: values.fiatAmount,
      feeDash: 0.999,
      feeFiat: 0.999,
      totalFiat: values.amount,
      destinationAddress: values.recipient,
      toAvatar: { uri: receiver.avatarUrl },
      fromAvatar: { uri: sender.avatarUrl },
      onConfirmation: () => {
        form.resetForm();
        return createSendPaymentTransaction({
          // Tmp this will be fixed with new schema
          dashAmount: values.dashAmount,
          fiatAmount: values.fiatAmount,

          recipient: values.recipient,
          amount: values.dashAmount,
        });
      },
    });
  };

  render() {
    const { transactions } = this.props;
    return (
      <Container>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
          <SlideInUp fromValue={100}>
            <Form {...this.state}>
              <View style={styles.row}>
                <ProfilePicture {...this.props} />
              </View>
              <View style={styles.row}>
                <AmountField />
              </View>
              <View style={styles.transactionRow}>
                <Transactions data={transactions} />
              </View>
            </Form>
          </SlideInUp>
        </ScrollView>
      </Container>
    );
  }
}

export default connect(
  selector,
  actions,
)(PayTab);
