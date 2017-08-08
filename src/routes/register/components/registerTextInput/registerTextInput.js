import React from "react";

import TextInput from "../../../../components/textInput";

import styles from "./styles";

const RegisterTextInput = ({
  placeholder,
  color = "black",
  secureTextEntry = false,
  ...props
}) =>
  <TextInput
    placeholder={placeholder}
    color={color}
    style={styles.textInput}
    hideUnderlineColor
    secureTextEntry={secureTextEntry}
    {...props}
  />;

export default RegisterTextInput;
