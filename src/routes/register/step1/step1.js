import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../../../components/button";
import TextInput from "../../../components/textInput";
import BackgroundImage from "../../../components/backgroundImage";

import images from "../../../config/images";
import registerStyles from "../styles";

const textInputColor = "white";

const RegisterStep1 = ({ navigation }) =>
  <BackgroundImage source={images.register}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>CREATE ACCOUNT</Text>
    </View>
    <View style={registerStyles.registerForm}>
      <TextInput
        placeholder="Email"
        style={registerStyles.registerTextField}
        underlineColorAndroid="transparent"
      />
      <TextInput
        placeholder="Password"
        style={registerStyles.registerTextField}
        underlineColorAndroid="transparent"
        secureTextEntry
      />
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
  title: "Register step 1"
};

export default RegisterStep1;
