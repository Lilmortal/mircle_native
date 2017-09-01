import React from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./styles";

const CustomTextInput = ({
  placeholder,
  Icon,
  placeholderColor = "gray",
  color = "black",
  secureTextEntry = false,
  style,
  hideUnderlineColor = false,
  error,
  compulsory = false,
  ...props
}) => {
  return (
    <View>
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
          placeholderTextColor={placeholderColor}
          selectionColor={color}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {compulsory && <Text style={styles.compulsory}>*</Text>}
      </View>
      <Text style={styles.error}>
        {error}
      </Text>
    </View>
  );
};

export default CustomTextInput;
