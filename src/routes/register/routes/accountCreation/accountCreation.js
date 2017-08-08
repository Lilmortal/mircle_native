import React from "react";
import { View, Text } from "react-native";

import { routeKeys } from "../../../../config";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";

const RegisterAccountCreation = ({
  navigation,
  registerEmailAddress,
  registerPassword
}) =>
  <RegisterLayout
    title="CREATE ACCOUNT"
    onPress={() => navigation.navigate(routeKeys.RegisterAdditionalDetails)}
  >
    <TextInput
      placeholder="Email"
      onChangeText={email => registerEmailAddress(email)}
    />
    <TextInput
      placeholder="Password"
      secureTextEntry
      onChangeText={password => registerPassword(password)}
    />
  </RegisterLayout>;

export default RegisterAccountCreation;
