import React from "react";
import { Text } from "react-native";

import styles from "./styles";

const LoginText = ({ children, style }) =>
  <Text style={[style, styles.loginFont]}>
    {children}
  </Text>;

export default LoginText;
