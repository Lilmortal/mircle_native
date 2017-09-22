import React, { Component } from "react";

import { RegularText } from "../../../../components/text";
import RegisterLayout from "../../layout/registerLayout";

export default class RegisterEmailConfirmation extends Component {
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
