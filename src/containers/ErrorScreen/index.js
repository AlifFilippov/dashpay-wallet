/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import type { ReactElement } from "./types";
import type { Props } from "./types";
import type { State } from "./types";
import connect from "react-redux/es/connect/connect";
import selector from "./selectors";
import actions from "./actions";

class ErrorScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.navigateHome = this.navigateHome.bind(this);
    this.state = {};
  }

  navigateHome() {
    this.props.navigation.navigate("HomeScreen");
  }

  render(): React.Element<any> {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>We're sorry, there has been an application error</Text>
        <TouchableOpacity style={styles.navButton} onPress={this.navigateHome}>
          <Text style={styles.desc}>Go back to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ErrorScreen = connect(
  selector,
  actions,
)(ErrorScreen);

export default ErrorScreen;
