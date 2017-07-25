import React from "react";
import { TextInput } from "react-native";

const CustomTextInput = ({
  placeholder,
  color = "gray",
  secureTextEntry = false,
  style
}) =>
  <TextInput
    placeholder={placeholder}
    style={[{ color }, style]}
    placeholderTextColor={color}
    selectionColor={color}
    underlineColorAndroid={color}
    secureTextEntry={secureTextEntry}
  />;

export default CustomTextInput;
