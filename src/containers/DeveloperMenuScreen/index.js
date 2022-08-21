// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { debounce } from 'lodash';
import { View } from 'react-native';
import Text from 'components/Text';
import Input from 'components/Input';
import Touchable from 'components/Touchable';
import styles from './styles';
import selector from './selectors';
import actions from './actions';
import type { Props } from './types';

class DeveloperMenuScreen extends React.Component<Props> {
  static touchableAction(text, action) {
    return (
      <Touchable onPress={action}>
        <Text style={styles.text}>{text}</Text>
      </Touchable>
    );
  }

  constructor(props: Props) {
    super(props);
    this.onMnemonicChange = this.onMnemonicChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.setMnemonicDebounce = debounce(props.setMnemonic, 500);
    this.setUsernameDebounce = debounce(props.setUsername, 500);
    this.state = {
      username: props.username,
      mnemonic: props.mnemonic,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { mnemonic } = this.state;
    if (nextProps.mnemonic !== mnemonic) {
      this.setState({
        mnemonic: nextProps.mnemonic,
      });
    }
  }

  onUsernameChange(username) {
    this.setState({ username }, () => this.setUsernameDebounce(username));
  }

  onMnemonicChange(mnemonic) {
    this.setState({ mnemonic }, () => this.setMnemonicDebounce(mnemonic));
  }

  render() {
    const { navigation } = this.props;
    const navReset = (routeName) => {
      navigation.reset([NavigationActions.navigate({routeName})]);
    };
    const { username, mnemonic } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Mnemonic:</Text>
        <Input
          style={styles.input}
          multiline={true}
          onChangeText={this.onMnemonicChange}
          value={mnemonic}
        />
        <Text style={styles.text}>Username:</Text>
        <Input
          style={styles.input}
          onChangeText={this.onUsernameChange}
          value={username}
        />
        {DeveloperMenuScreen.touchableAction('Generate new mnemonic', () => this.props.createAccount())}
        {DeveloperMenuScreen.touchableAction('Go to HomeScreen', () => navReset('HomeScreen'))}
      </View>
    );
  }
}

export default connect(
  selector,
  actions,
)(DeveloperMenuScreen);
