import React, { Component } from "react";
import { View, Image, TouchableHighlight, Modal, Alert } from "react-native";

import BackgroundImage from "../../components/backgroundImage";
import Icon from "../../components/icon";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";

import { images } from "../../config";
import styles from "./styles";

class Login extends Component {
  static navigationOptions = {
    title: "Logout",
    tabBarVisible: false,
    header: false,
    drawerIcon: () => <Icon source={images.logoutIcon} />
  };

  constructor(props) {
    super(props);

    this.state = {
      forgottenPasswordModalVisible: false
    };
  }

  setModalVisible = visible => {
    this.setState({ forgottenPasswordModalVisible: visible });
  };

  showAlert = () => {
    Alert.alert(
      "willsmith@gmail.com has been sent an email, have a look at it to reset your password."
    );
  };

  sendEmail = () => {
    this.showAlert();
    this.setModalVisible(false);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <BackgroundImage source={images.city1}>
        <View style={styles.loginContainer}>
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

            <Button onPress={() => navigate("QrCode")}>
              <View>
                <LoginText style={styles.loginText}>
                  Login to my account >
                </LoginText>
              </View>
            </Button>
          </View>

          <View style={styles.seperator}>
            <LoginText>OR</LoginText>
          </View>

          <Button
            onPress={() => navigate("QrCode")}
            style={styles.facebookButton}
          >
            <View style={styles.buttonContainer}>
              <Icon source={images.facebookLogo} style={styles.icon} />
              <LoginText>Sign in with Facebook</LoginText>
            </View>
          </Button>

          <Button
            onPress={() => navigate("QrCode")}
            style={styles.twitterButton}
          >
            <View style={styles.buttonContainer}>
              <Icon source={images.twitterLogo} style={styles.icon} />
              <LoginText>Sign in with Twitter</LoginText>
            </View>
          </Button>

          <View style={styles.help}>
            <TouchableHighlight onPress={() => navigate("RegisterStep1")}>
              <View>
                <LoginText style={styles.helpText}>Register</LoginText>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.setModalVisible(true)}>
              <View>
                <LoginText style={styles.helpText}>Forgot password?</LoginText>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.forgottenPasswordModalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <BackgroundImage source={images.city1}>
            <View style={styles.title}>
              <LoginText style={styles.titleText}>Forgotten Password</LoginText>
              <LoginText style={styles.forgottenPasswordDescription}>
                Enter your email address, we will send you an email to confirm
                if you want to reset your password.
              </LoginText>
            </View>
            <TextInput
              icon={images.emailIcon}
              placeholder="Email address"
              color="white"
            />
            <View style={styles.forgottenPasswordSubmitArea}>
              <Button onPress={this.sendEmail}>
                <View>
                  <LoginText>Send email</LoginText>
                </View>
              </Button>
              <Button onPress={() => this.setModalVisible(false)}>
                <View>
                  <LoginText>Cancel</LoginText>
                </View>
              </Button>
            </View>
          </BackgroundImage>
        </Modal>
      </BackgroundImage>
    );
  }
}

export default Login;
