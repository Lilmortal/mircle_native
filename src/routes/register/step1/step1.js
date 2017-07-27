import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../../../components/button";
import TextInput from "../components/registerTextInput";
import BackgroundImage from "../../../components/backgroundImage";

import { colors, images } from "../../../config";
import registerStyles from "../styles";

const RegisterStep1 = ({ navigation }) =>
  <BackgroundImage source={images.register1}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>CREATE ACCOUNT</Text>
    </View>
    <View style={registerStyles.registerForm}>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
    </View>
    <View style={registerStyles.submitArea}>
      <Button
        onPress={() => navigation.navigate("RegisterStep2")}
        style={registerStyles.button}
      >
        <Text style={registerStyles.buttonText}>NEXT</Text>
      </Button>
    </View>
  </BackgroundImage>;

RegisterStep1.navigationOptions = {
  headerTitle: "Register step 1",
  headerBackTitle: "Login page",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.settings
  }
};

export default RegisterStep1;
