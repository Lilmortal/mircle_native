import React from "react";
import { View, Text } from "react-native";

import TextInput from "../../components/registerTextInput";
import RegisterLayout from "../../layout/registerLayout";

const RegisterAccountCreation = ({ navigation }) =>
  <RegisterLayout
    title="CREATE ACCOUNT"
    onPress={() => navigation.navigate("RegisterAdditionalDetails")}
  >
    <TextInput placeholder="Email" />
    <TextInput placeholder="Password" secureTextEntry />
  </RegisterLayout>;

export default RegisterAccountCreation;
