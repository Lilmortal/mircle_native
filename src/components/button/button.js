import React from "react";
import { TouchableOpacity } from "react-native";

import buttonStyle from "./styles";

const Button = ({ onPress, style, color, children }) =>
  <TouchableOpacity
    onPress={onPress}
    style={[buttonStyle.button, color && { borderColor: color }, style]}
  >
    {children}
  </TouchableOpacity>;

export default Button;
