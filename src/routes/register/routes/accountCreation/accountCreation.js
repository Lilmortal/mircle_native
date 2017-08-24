import React from "react";
import { View, Text } from "react-native";

import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";

const RegisterAccountCreation = ({
  navigation,
  goNextPage,
  registerEmailAddress,
  registerPassword
}) =>
  <RegisterLayout title="Create account" onPress={() => goNextPage(navigation)}>
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
