/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from "react";
import { View } from "react-native";
import { withStyles } from "libraries";
import styles from "./styles";

function Container({ styles }) {
  return <View style={styles.view} />;
}

Container = withStyles(styles)(Container);

class Styles extends React.Component {
  state = { count: 0 };

  constructor(props) {
    super(props);
    this.intervalId = setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 1000);
  }

  render() {
    const { count } = this.state;
    if (count % 3 === 0) {
      return <Container red />;
    }
    if (count % 3 === 1) {
      return <Container green />;
    }
    return <Container pink />;
  }
}

export default Styles;
