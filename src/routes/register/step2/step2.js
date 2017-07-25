import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../../../components/button";
import TextInput from "../components/registerTextInput";
import BackgroundImage from "../../../components/backgroundImage";

import images from "../../../config/images";
import registerStyles from "../styles";

const RegisterStep2 = ({ navigation }) =>
  <BackgroundImage source={images.register}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>
        We like to know more about you...
      </Text>
    </View>
    <View style={registerStyles.registerForm}>
      <TextInput placeholder="First Name" />
      <TextInput placeholder="Last Name" />
      <TextInput placeholder="Age" />
      <TextInput placeholder="Occupation" />
    </View>
    <View style={registerStyles.submitArea}>
      <Button
        onPress={() => navigation.navigate("RegisterSummary")}
        style={registerStyles.button}
      >
        <Text style={registerStyles.buttonText}>SUMMARY</Text>
      </Button>
    </View>
  </BackgroundImage>;

RegisterStep2.navigationOptions = {
  title: "Register step 2"
};

export default RegisterStep2;
