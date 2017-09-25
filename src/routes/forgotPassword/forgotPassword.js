import React, { Component } from "react";
import { View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextInput from "@jacktan/mircle_native_components/textInput";
import Button from "@jacktan/mircle_native_components/button";
import {
  LogoText,
  RegularText,
  ButtonText
} from "@jacktan/mircle_native_components/text";
import { images, routeKeys } from "../../config";
import styles from "./styles";

const emailIcon = <Icon name="envelope" color="white" />;

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ""
    };
  }

  setEmailAddress = emailAddress => {
    this.setState({ emailAddress });
  };

  render() {
    const { sendEmail, cancelPage } = this.props;
    return (
      <View style={styles.forgotPassword}>
        <View style={styles.title}>
          <LogoText color="white">Forgotten Password</LogoText>
          <View style={styles.forgottenPasswordDescription}>
            <RegularText color="white">
              Enter your email address, we will send you an email to confirm if
              you want to reset your password.
            </RegularText>
          </View>
        </View>
        <TextInput
          Icon={emailIcon}
          placeholder="Email address"
          color="white"
          onChangeText={value => this.setEmailAddress(value)}
        />
        <View style={styles.forgottenPasswordSubmitArea}>
          <Button onPress={() => sendEmail(this.state.emailAddress)}>
            <View>
              <ButtonText color="white" bold>
                Send email
              </ButtonText>
            </View>
          </Button>
          <Button onPress={cancelPage}>
            <View>
              <ButtonText color="white" bold>
                Cancel
              </ButtonText>
            </View>
          </Button>
        </View>
      </View>
    );
  }
}
