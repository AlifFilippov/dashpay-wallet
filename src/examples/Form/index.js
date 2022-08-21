/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { Field } from 'components';

export class Form extends React.Component {
  constructor(props: Props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      debounceValue: ''
    };
  }

  handleOnChange(debounceValue) {
    this.setState({ debounceValue });
  }

  render() {
    const { debounceValue } = this.state;
    return (
      <View>
        <Field onChange={this.handleOnChange}>
          {({ bind, focused, value }) => (
            <View>
              <View>
                <Text>
                  {'focused: '}
                  {focused ? 'true' : 'false'}
                </Text>
              </View>
              <View>
                <Text>
                  {'debounceValue: '}
                  {debounceValue}
                </Text>
              </View>
              <View>
                <Text>
                  {'value: '}
                  {value}
                </Text>
              </View>
              <TextInput {...bind} value={value} />
            </View>
          )}
        </Field>
      </View>
    );
  }
}

export default Form;
