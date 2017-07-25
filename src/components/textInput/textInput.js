import React from "react";
import { TextInput } from "react-native";

const CustomTextInput = ({
  placeholder,
  color = "gray",
  secureTextEntry = false
}) =>
  <TextInput
    placeholder={placeholder}
    style={{ color }}
    placeholderTextColor={color}
    selectionColor={color}
    underlineColorAndroid={color}
    secureTextEntry={secureTextEntry}
  />;

export default CustomTextInput;
