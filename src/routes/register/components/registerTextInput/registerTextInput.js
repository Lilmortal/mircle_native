import React from "react";

import TextInput from "../../../../components/textInput";

import styles from "./styles";

const RegisterTextInput = ({ placeholder, secureTextEntry = false }) =>
  <TextInput
    placeholder={placeholder}
    style={styles.textInput}
    hideUnderlineColor
    secureTextEntry={secureTextEntry}
  />;

export default RegisterTextInput;
