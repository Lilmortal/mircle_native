import React from "react";
import { View, Text } from "react-native";

import RegisterLayout from "../../layout/registerLayout";

const RegisterEmailConfirmation = ({ navigation }) =>
  <RegisterLayout
    title="Email confirmation has been sent."
    onPress={() => navigation.navigate("Login")}
    lastPage
  >
    <Text>
      Please look at your willsmith@gmail.com to activate your account.
    </Text>
  </RegisterLayout>;

export default RegisterEmailConfirmation;
