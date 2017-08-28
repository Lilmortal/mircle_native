import React from "react";
import { View, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";
import { images, routeKeys } from "../../config";
import styles from "./styles";

const emailIcon = <Icon name="envelope" color="white" />;

const ForgotPassword = ({ goToLoginPage, cancelPage }) =>
  <View style={styles.forgotPassword}>
    <View style={styles.title}>
      <LoginText style={styles.titleText}>Forgotten Password</LoginText>
      <LoginText style={styles.forgottenPasswordDescription}>
        Enter your email address, we will send you an email to confirm if you
        want to reset your password.
      </LoginText>
    </View>
    <TextInput Icon={emailIcon} placeholder="Email address" color="white" />
    <View style={styles.forgottenPasswordSubmitArea}>
      <Button onPress={goToLoginPage}>
        <View>
          <LoginText>Send email</LoginText>
        </View>
      </Button>
      <Button onPress={cancelPage}>
        <View>
          <LoginText>Cancel</LoginText>
        </View>
      </Button>
    </View>
  </View>;

export default ForgotPassword;
