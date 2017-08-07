import React from "react";
import { View, Text } from "react-native";

import { routeKeys } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const RegisterEmailConfirmation = ({ navigation }) =>
  <RegisterLayout
    title="Email confirmation has been sent."
    onPress={() => navigation.navigate(routeKeys.Login)}
    lastPage
  >
    <Text style={styles.emailConfirmationText}>
      Please look at your willsmith@gmail.com to activate your account.
    </Text>
  </RegisterLayout>;

export default RegisterEmailConfirmation;
