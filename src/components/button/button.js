import React from "react";
import { TouchableHighlight } from "react-native";

import buttonStyle from "./styles";

const Button = ({ onPress, style, children }) =>
  <TouchableHighlight onPress={onPress} style={[buttonStyle.button, style]}>
    {children}
  </TouchableHighlight>;

export default Button;
