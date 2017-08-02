import React from "react";
import { View, Text } from "react-native";

import Button from "../../../components/button";
import TextInput from "../components/registerTextInput";

import registerStyles from "../styles";

const RegisterStep1 = ({ navigation }) =>
  <View style={registerStyles.register}>
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
  </View>;

export default RegisterStep1;
