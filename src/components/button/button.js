import React from "react";
import { TouchableOpacity } from "react-native";

import styles from "./styles";

const Button = ({ onPress, style, color, children }) =>
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, color && { borderColor: color }, style]}
  >
    {children}
  </TouchableOpacity>;

export default Button;
