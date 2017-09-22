import React from "react";
import { View, TextInput } from "react-native";

import { RegularText } from "../text";
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
        {compulsory && <RegularText color="red">*</RegularText>}
      </View>
      <RegularText color="red">
        {error}
      </RegularText>
    </View>
  );
};

export default CustomTextInput;
