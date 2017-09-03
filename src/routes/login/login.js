import React, { Component } from "react";
import { View, Image, TouchableHighlight, Modal, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import BackgroundImage from "../../components/backgroundImage";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import LoginText from "./components/loginText";

import styles from "./styles";

const emailIcon = <Icon name="envelope" color="white" />;
const passwordIcon = <Icon name="lock" color="white" />;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: ""
    };
  }

  componentDidMount() {
    // register pages redirect to login page no matter what, this resets its state.
    this.props.resetRegisterDetails();
  }

  setEmailAddress(emailAddress) {
    this.setState({ emailAddress });
  }

  setPassword(password) {
    this.setState({ password });
  }

  render() {
    const {
      login,
      goToRegistrationPage,
      goToForgottenPasswordPage
    } = this.props;

    return (
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
              Icon={emailIcon}
              placeholder="Email address"
              color="white"
              onChangeText={emailAddress => this.setEmailAddress(emailAddress)}
            />
            <TextInput
              Icon={passwordIcon}
              placeholder="Password"
              color="white"
              secureTextEntry
              onChangeText={password => this.setPassword(password)}
            />
          </View>

          <Button
            onPress={() => login(this.state.emailAddress, this.state.password)}
          >
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

        <View style={styles.socialMediaLogin}>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            Login with Facebook
          </Icon.Button>

          <Icon.Button name="twitter" backgroundColor="#00aced">
            Login with twitter
          </Icon.Button>
        </View>

        <View style={styles.help}>
          <TouchableHighlight onPress={goToRegistrationPage}>
            <View>
              <LoginText style={styles.helpText}>Register</LoginText>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={goToForgottenPasswordPage}>
            <View>
              <LoginText style={styles.helpText}>Forgot password?</LoginText>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Login;
