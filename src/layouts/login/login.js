import React from "react";
import { View, Text, TextInput, Image, TouchableHighlight } from "react-native";

import Icon from "../../components/icon";
import LoginText from "./loginText";

import images from "../../config/images";
import styles from "./styles";

const textInputColor = "white";

const Login = ({ navigation }) => {
  const { navigate } = navigation;

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
          <Text style={styles.helpText}>Register</Text>
          <Text style={styles.helpText}>Forgot password?</Text>
        </View>
      </View>
    </Image>
  );
};

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false,
  header: false
};

export default Login;
