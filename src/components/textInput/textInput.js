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
    <View style={styles.textInputContainer}>
      <View style={styles.icon}>
        <Icon source={icon} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={[{ color }, styles.textInput, style]}
        placeholderTextColor={color}
        selectionColor={color}
        underlineColorAndroid={hideUnderlineColor ? "transparent" : color}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
