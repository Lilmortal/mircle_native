import React, { Component } from "react";
import { Text } from "react-native";

import styles from "./styles";

export default class LoginText extends Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    const { children, style } = this.props;

    return (
      <Text style={[styles.loginFont, style]}>
        {children}
      </Text>
    );
  }
}
