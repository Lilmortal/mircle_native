import React, { Component } from "react";
import { View, Text } from "react-native";

import TextInput from "../../../../components/textInput";
import RegisterLayout from "../../layout/registerLayout";
import { validate } from "../../../../libs";

class RegisterAccountCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddressValid: false,
      emailAddressErrorMessage: "",
      passwordValid: false,
      passwordErrorMessage: ""
    };
  }

  validateForm = () => {
    const { emailAddress, password } = this.props;
    const emailAddressValidation = validate(emailAddress, "email");
    const passwordValidation = validate(password, "password");

    this.setState({
      emailAddressValid: emailAddressValidation.isValid,
      emailAddressErrorMessage: emailAddressValidation.errorMessage
    });
    this.setState({
      passwordValid: passwordValidation.isValid,
      passwordErrorMessage: passwordValidation.errorMessage
    });

    return emailAddressValidation.isValid && passwordValidation.isValid;
  };

  render() {
    const {
      emailAddress,
      goToNextPage,
      registerEmailAddress,
      registerPassword
    } = this.props;

    return (
      <RegisterLayout
        title="Create account"
        onPress={() => goToNextPage(this.validateForm())}
      >
        <TextInput
          placeholder="Email"
          onChangeText={email => registerEmailAddress(email)}
          keyboardType="email-address"
          onEndEditing={e => {
            const validation = validate(e.nativeEvent.text, "email");
            this.setState({
              emailAddressValid: validation.isValid,
              emailAddressErrorMessage: validation.errorMessage
            });
          }}
          value={emailAddress}
          error={this.state.emailAddressErrorMessage}
          compulsory
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={password => registerPassword(password)}
          onEndEditing={e => {
            const validation = validate(e.nativeEvent.text, "password");
            this.setState({
              passwordValid: validation.isValid,
              passwordErrorMessage: validation.errorMessage
            });
          }}
          error={this.state.passwordErrorMessage}
          compulsory
        />
      </RegisterLayout>
    );
  }
}

export default RegisterAccountCreation;
