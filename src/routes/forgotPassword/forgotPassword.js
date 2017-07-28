import React from "react";
import { View, Alert } from "react-native";

import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";
import { images, colors } from "../../config";
import styles from "./styles";

const ForgotPassword = ({ navigation }) => {
  const sendEmail = () => {
    Alert.alert(
      "willsmith@gmail.com has been sent an email, have a look at it to reset your password."
    );
    navigation.navigate("Login");
  };

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.title}>
        <LoginText style={styles.titleText}>Forgotten Password</LoginText>
        <LoginText style={styles.forgottenPasswordDescription}>
          Enter your email address, we will send you an email to confirm if you
          want to reset your password.
        </LoginText>
      </View>
      <TextInput
        icon={images.emailIcon}
        placeholder="Email address"
        color="white"
      />
      <View style={styles.forgottenPasswordSubmitArea}>
        <Button onPress={sendEmail}>
          <View>
            <LoginText>Send email</LoginText>
          </View>
        </Button>
        <Button onPress={() => navigation.navigate("Login")}>
          <View>
            <LoginText>Cancel</LoginText>
          </View>
        </Button>
      </View>
    </View>
  );
};

ForgotPassword.navigationOptions = {
  title: "Forgot password",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.navigationHeader
  }
};

export default ForgotPassword;
