import React from "react";
import { TouchableHighlight } from "react-native";

import buttonStyle from "./styles";

const Button = ({ onPress, style, color, children }) =>
  <TouchableHighlight
    onPress={onPress}
    style={[buttonStyle.button, color && { borderColor: color }, style]}
  >
    {children}
  </TouchableHighlight>;

export default Button;
