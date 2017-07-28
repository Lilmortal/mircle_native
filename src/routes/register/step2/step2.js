import React from "react";
import { View, Text } from "react-native";

import Button from "../../../components/button";
import TextInput from "../components/registerTextInput";

import { colors } from "../../../config";
import registerStyles from "../styles";

const RegisterStep2 = ({ navigation }) =>
  <View style={registerStyles.register}>
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
  </View>;

RegisterStep2.navigationOptions = {
  title: "Register step 2",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.settings
  }
};

export default RegisterStep2;
