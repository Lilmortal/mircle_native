import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Spinner from "../../components/spinner";
import BackgroundImage from "../../components/backgroundImage";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import {
  LogoText,
  TitleDescriptionText,
  RegularText,
  ButtonText
} from "../../components/text";

import styles from "./styles";

const emailIcon = <Icon name="envelope" color="white" />;
const passwordIcon = <Icon name="lock" color="white" />;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      loading: false
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

  setLoading(loading) {
    this.setState({ loading });
  }

  render() {
    const {
      login,
      goToRegistrationPage,
      goToForgottenPasswordPage
    } = this.props;

    return (
      <View style={styles.login}>
        <Spinner show={this.state.loading} />
        <View style={styles.title}>
          <LogoText color="white" style={styles.titleText}>
            Mircle
          </LogoText>
          <TitleDescriptionText color="white">
            connect to each other stress free
          </TitleDescriptionText>
        </View>

        <View style={styles.loginForm}>
          <View>
            <TextInput
              Icon={emailIcon}
              placeholder="Email address"
              color="white"
              keyboardType="email-address"
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
            onPress={async () => {
              this.setLoading(true);
              await login(this.state.emailAddress, this.state.password);
              this.setLoading(false);
            }}
          >
            <View>
              <ButtonText color="white" bold>
                Login to my account >
              </ButtonText>
            </View>
          </Button>
        </View>

        <View style={styles.seperator}>
          <RegularText color="white">OR</RegularText>
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
          <TouchableOpacity onPress={goToRegistrationPage}>
            <View>
              <RegularText color="white">Register</RegularText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToForgottenPasswordPage}>
            <View>
              <RegularText color="white">Forgot password?</RegularText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
