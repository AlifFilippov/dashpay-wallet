/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { FormattedText } from 'components';
import { FormattedDate } from 'components';
import { FormattedTime } from 'components';
import { FormattedRelative } from 'components';
import { FormattedNumber } from 'components';
import actions from './actions';
import selector from './selectors';
import styles from './styles';

class I18n extends React.Component {
  constructor(props) {
    super(props);
    (this: any).handleOnPressEn = this.changeLocale.bind(this, 'en');
    (this: any).handleOnPressDe = this.changeLocale.bind(this, 'de');
    (this: any).generateRandomData = this.generateRandomData.bind(this);
    this.state = {
      example1: {},
      example2: {
        name: 'Ryan Taylor',
        count: 0
      },
      example3: new Date(1503683833000),
      example4: new Date(1503683833000),
      example5: new Date(),
      example6: 130116.06,
      example7: 130.11606,
      example8: 0.929
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.generateRandomData, 2000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  generateRandomData() {
    const example2 = {
      ...this.state.example2,
      count: (this.state.example2.count + 1) % 4
    };
    this.setState({ ...this.state, example2 });
  }

  changeLocale(locale) {
    this.props.changeLocale(locale);
  }

  render() {
    const { locale } = this.props;
    const { example1 } = this.state;
    const { example2 } = this.state;
    const { example3 } = this.state;
    const { example4 } = this.state;
    const { example5 } = this.state;
    const { example6 } = this.state;
    const { example7 } = this.state;
    const { example8 } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <View style={styles.row}>
            <TouchableOpacity onPress={this.handleOnPressEn}>
              <Text style={styles.link}>{'en'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleOnPressDe}>
              <Text style={styles.link}>{'de'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>
            {'locale'}: {locale}
          </Text>
          <Text style={styles.heading}>
            {'name'}: {example2.name}
          </Text>
          <Text style={styles.heading}>
            {'count'}: {example2.count}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 1 - Plain Text'}</Text>
          <FormattedText style={styles.formattedText}>
            {'Hello DASH Team!'}
          </FormattedText>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>
            {'Example 2 - Placeholders & Pluralization'}
          </Text>
          <FormattedText values={example2} style={styles.formattedText}>
            {`Welcome {name}, you have {count, plural, =0 {no new messages} one {one new message} other {{count} new messages}}.`}
          </FormattedText>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 3 - Date'}</Text>
          <FormattedDate year="numeric" month="long" day="2-digit">
            {example3}
          </FormattedDate>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 4 - Time'}</Text>
          <FormattedTime>{example4}</FormattedTime>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 5 - Time (Relative)'}</Text>
          <FormattedRelative>{example5}</FormattedRelative>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 6 - Number (currency)'}</Text>
          <FormattedNumber style={'currency'} currency={'USD'}>
            {example6}
          </FormattedNumber>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 7 - Number (decimal)'}</Text>
          <FormattedNumber style={'decimal'} maximumFractionDigits={10}>
            {example7}
          </FormattedNumber>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>{'Example 8 - Number (percent)'}</Text>
          <FormattedNumber style={'percent'}>{example8}</FormattedNumber>
        </View>
      </ScrollView>
    );
  }
}

I18n = connect(
  selector,
  actions
)(I18n);

export default I18n;
