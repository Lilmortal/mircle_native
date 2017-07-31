import React, { Component } from "react";
import { View, Image, TouchableHighlight, Modal, Alert } from "react-native";

import BackgroundImage from "../../components/backgroundImage";
import Icon from "../../components/icon";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";

import { images } from "../../config";
import styles from "./styles";

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
        <TextInput
          icon={images.emailIcon}
          placeholder="Email address"
          color="white"
        />
        <TextInput
          icon={images.passwordIcon}
          placeholder="Password"
          color="white"
          secureTextEntry
        />
      </View>

      <Button onPress={() => navigation.navigate("QrCode")}>
        <View>
          <LoginText style={styles.loginText}>Login to my account ></LoginText>
        </View>
      </Button>
    </View>

    <View style={styles.seperator}>
      <LoginText>OR</LoginText>
    </View>

    <Button
      onPress={() => navigation.navigate("QrCode")}
      style={styles.facebookButton}
    >
      <View style={styles.buttonContainer}>
        <Icon source={images.facebookLogo} style={styles.icon} />
        <LoginText>Sign in with Facebook</LoginText>
      </View>
    </Button>

    <Button
      onPress={() => navigation.navigate("QrCode")}
      style={styles.twitterButton}
    >
      <View style={styles.buttonContainer}>
        <Icon source={images.twitterLogo} style={styles.icon} />
        <LoginText>Sign in with Twitter</LoginText>
      </View>
    </Button>

    <View style={styles.help}>
      <TouchableHighlight onPress={() => navigation.navigate("RegisterStep1")}>
        <View>
          <LoginText style={styles.helpText}>Register</LoginText>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("ForgotPassword")}>
        <View>
          <LoginText style={styles.helpText}>Forgot password?</LoginText>
        </View>
      </TouchableHighlight>
    </View>
  </View>;

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false,
  header: false,
  drawerIcon: () => <Icon source={images.logoutIcon} />
};

export default Login;
