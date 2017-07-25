import React from "react";

import TextInput from "../../../../components/textInput";

import styles from "./styles";

const RegisterTextInput = ({
  placeholder,
  color = "white",
  secureTextEntry = false
}) =>
  <TextInput
    placeholder={placeholder}
    color={color}
    style={styles.textInput}
    hideUnderlineColor
    secureTextEntry={secureTextEntry}
  />;

export default RegisterTextInput;
