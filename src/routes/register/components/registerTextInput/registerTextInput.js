import React from "react";
import { View, Text } from "react-native";

import TextInput from "../../../../components/textInput";

import styles from "./styles";

const RegisterTextInput = ({
  placeholder,
  placeholderColor = "gray",
  color = "black",
  secureTextEntry = false,
  errorMessage,
  ...props
}) =>
  <View>
    <View style={styles.errorMessageContainer}>
      <Text style={styles.errorMessage}>
        {errorMessage}
      </Text>
    </View>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      color={color}
      style={styles.textInput}
      hideUnderlineColor
      secureTextEntry={secureTextEntry}
      blurOnSubmit
      {...props}
    />
  </View>;

export default RegisterTextInput;
