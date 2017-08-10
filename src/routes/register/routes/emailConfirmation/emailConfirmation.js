import React, { Component } from "react";
import { View, Text } from "react-native";
import Communications from "react-native-communications";

import { routeKeys } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

class RegisterEmailConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Communications.phoneCall("02102576810", true);
  }

  render() {
    const { navigation, phoneNumber, email } = this.props;
    return (
      <RegisterLayout
        title="Email confirmation has been sent."
        onPress={() => navigation.navigate(routeKeys.Login)}
        lastPage
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

export default RegisterEmailConfirmation;
