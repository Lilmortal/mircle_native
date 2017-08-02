import React from "react";
import { View, Text } from "react-native";

import Button from "../../../components/button";

import registerStyles from "../styles";
import styles from "./styles";

const RegisterSummary = ({ navigation }) =>
  <View style={registerStyles.register}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>
        Email confirmation has been sent.
      </Text>
    </View>
    <View style={styles.emailConfirmation}>
      <Text style={styles.emailConfirmationText}>
        Please look at your willsmith@gmail.com to activate your account.
      </Text>
    </View>
    <View style={registerStyles.submitArea}>
      <Button
        onPress={() => navigation.navigate("Login")}
        style={registerStyles.button}
      >
        <Text style={registerStyles.buttonText}>Back to login page</Text>
      </Button>
    </View>
  </View>;

export default RegisterSummary;
