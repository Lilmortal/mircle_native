import React, { Component } from "react";
import { View, Image, TouchableHighlight, Modal, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import BackgroundImage from "../../components/backgroundImage";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";

import { images, routeKeys } from "../../config";
import styles from "./styles";

const emailIcon = <Icon name="envelope" color="white" />;
const passwordIcon = <Icon name="lock" color="white" />;

const Login = ({ navigation }) =>
  <View style={styles.login}>
    <View style={styles.title}>
      <LoginText style={styles.titleText}>Mircle</LoginText>
      <LoginText style={styles.titleDescription}>
        connect to each other stress free
      </LoginText>
    </View>

    <View style={styles.loginForm}>
      <View>
        <TextInput Icon={emailIcon} placeholder="Email address" color="white" />
        <TextInput
          Icon={passwordIcon}
          placeholder="Password"
          color="white"
          secureTextEntry
        />
      </View>

      <Button onPress={() => navigation.navigate(routeKeys.QrCode)}>
        <View>
          <LoginText style={styles.loginText}>Login to my account ></LoginText>
        </View>
      </Button>
    </View>

    <View style={styles.seperator}>
      <LoginText>OR</LoginText>
    </View>

    <View style={styles.socialMediaLogin}>
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => navigation.navigate(routeKeys.QrCode)}
      >
        Login with Facebook
      </Icon.Button>

      <Icon.Button
        name="twitter"
        backgroundColor="#00aced"
        onPress={() => navigation.navigate(routeKeys.QrCode)}
      >
        Login with twitter
      </Icon.Button>
    </View>

    <View style={styles.help}>
      <TouchableHighlight
        onPress={() => navigation.navigate(routeKeys.RegisterAccountCreation)}
      >
        <View>
          <LoginText style={styles.helpText}>Register</LoginText>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate(routeKeys.ForgotPassword)}
      >
        <View>
          <LoginText style={styles.helpText}>Forgot password?</LoginText>
        </View>
      </TouchableHighlight>
    </View>
  </View>;

export default Login;
