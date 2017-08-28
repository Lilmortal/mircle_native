import React, { Component } from "react";
import { View, Text } from "react-native";

import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

export default class RegisterEmailConfirmation extends Component {
  render() {
    const { email, phoneNumber, goNextPage } = this.props;

    return (
      <RegisterLayout
        title="Email confirmation has been sent."
        onPress={goNextPage}
        buttonMessage="BACK TO LOGIN PAGE"
      >
        <Text style={styles.emailConfirmationText}>
          An email has been sent to{" "}
          <Text style={styles.emailText}>{email}</Text>. Please have a look to
          get it activated.
        </Text>
      </RegisterLayout>
    );
  }
}
