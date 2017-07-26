import React from "react";
import { View, TextInput } from "react-native";

import Icon from "../icon";

import styles from "./styles";

const CustomTextInput = ({
  placeholder,
  icon,
  color = "gray",
  secureTextEntry = false,
  style,
  hideUnderlineColor = false
}) => {
  return (
    <View
      style={[styles.textInputContainer, hideUnderlineColor && styles.noBorder]}
    >
      <Icon source={icon} />
      <TextInput
        placeholder={placeholder}
        style={[{ color }, styles.textInput, style]}
        placeholderTextColor={color}
        selectionColor={color}
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
