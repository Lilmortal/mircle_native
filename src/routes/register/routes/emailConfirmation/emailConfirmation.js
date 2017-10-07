import React, { Component } from "react";
import { BackHandler, Platform } from "react-native";

import { RegularText } from "@jacktan/mircle_native_components/text";
import RegisterLayout from "../../layout/registerLayout";

let listener = null;

export default class RegisterEmailConfirmation extends Component {
  componentDidMount() {
    if (Platform.OS === "android" && listener === null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }
  }

  componentWillUnmount() {
    listener.remove();
  }

  render() {
    const { email, phoneNumber, goNextPage } = this.props;

    return (
      <RegisterLayout
        title="Email confirmation has been sent."
        onPress={goNextPage}
        buttonMessage="BACK TO LOGIN PAGE"
      >
        <RegularText>
          An email has been sent to <RegularText bold>{email}</RegularText>.
          Please have a look to get it activated.
        </RegularText>
      </RegisterLayout>
    );
  }
}
