import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Modal,
  Alert
} from "react-native";

import Icon from "../../components/icon";
import LoginText from "./loginText";

import images from "../../config/images";
import styles from "./styles";

const textInputColor = "white";

class Login extends Component {
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
    Alert.alert("email sent.");
  };

  sendEmail = () => {
    this.showAlert();
    this.setModalVisible(false);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image source={images.city} style={styles.backgroundImage} blurRadius={2}>
        <View style={styles.container}>
          <View style={styles.title}>
            <LoginText style={styles.titleText}>Mircle</LoginText>
            <LoginText style={styles.titleDescription}>
              connect to each other stress free
            </LoginText>
          </View>

          <View style={styles.body}>
            <View style={styles.loginForm}>
              <TextInput
                placeholder="Email address"
                style={styles.textInput}
                placeholderTextColor={textInputColor}
                selectionColor={textInputColor}
                underlineColorAndroid={textInputColor}
              />
              <TextInput
                placeholder="Password"
                style={styles.textInput}
                placeholderTextColor={textInputColor}
                selectionColor={textInputColor}
                underlineColorAndroid={textInputColor}
                secureTextEntry
              />
            </View>

            <View style={styles.center}>
              <Text style={styles.centerText}>or</Text>
            </View>

            <TouchableHighlight
              onPress={() => navigate("QrCode")}
              style={[styles.button, styles.facebookLogo]}
            >
              <View style={styles.buttonChildren}>
                <Icon source={images.facebookLogo} />
                <Text style={styles.buttonText}>FACEBOOK</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigate("QrCode")}
              style={[styles.button, styles.twitterLogo]}
            >
              <View style={styles.buttonChildren}>
                <Icon source={images.twitterLogo} />
                <Text style={styles.buttonText}>TWITTER</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.help}>
            <Text
              style={styles.helpText}
              onPress={() => navigate("RegisterStep1")}
            >
              Register
            </Text>
            <TouchableHighlight onPress={() => this.setModalVisible(true)}>
              <Text style={styles.helpText}>Forgot password?</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.forgottenPasswordModalVisible}
          onRequestClose={() => this.setModalVisible(false)}
        >
          <Image
            source={images.city}
            style={styles.backgroundImage}
            blurRadius={2}
          >
            <View style={styles.forgottenpasswordTitle}>
              <Text style={styles.forgottenPasswordTitleText}>
                Forgotten Password
              </Text>
              <Text style={styles.forgottenPasswordText}>
                Enter your email address, we will send you an email to confirm
                if you want to reset your password.
              </Text>
            </View>
            <View style={styles.forgottenPassword}>
              <TextInput
                placeholder="Email address"
                style={styles.textInput}
                placeholderTextColor={textInputColor}
                selectionColor={textInputColor}
                underlineColorAndroid={textInputColor}
              />
              <TouchableHighlight
                onPress={this.sendEmail}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Send email</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.setModalVisible(false)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </Image>
        </Modal>
      </Image>
    );
  }
}

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false,
  header: false
};

export default Login;
