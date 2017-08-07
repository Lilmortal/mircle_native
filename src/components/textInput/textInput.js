import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const CustomTextInput = ({
  placeholder,
  Icon,
  color = "gray",
  secureTextEntry = false,
  style,
  hideUnderlineColor = false
}) => {
  return (
    <View
      style={[
        styles.textInputContainer,
        color && { borderColor: color },
        hideUnderlineColor && { borderBottomWidth: 0 }
      ]}
    >
      {Icon &&
        <View style={styles.icon}>
          {Icon}
        </View>}

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
