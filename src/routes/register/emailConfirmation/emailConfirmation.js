import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";

import images from "../../../config/images";
import styles from "./styles";

const textInputColor = "white";

const RegisterSummary = ({ navigation }) =>
  <Image source={images.register} style={styles.backgroundImage} blurRadius={2}>
    <View style={styles.stages} />

    <View style={styles.title}>
      <Text style={styles.titleText}>Email confirmation has been sent.</Text>
    </View>
    <View style={styles.summary}>
      <Text style={styles.summaryText}>
        Please look at your willsmith@gmail.com to activate your account.
      </Text>
    </View>
    <View style={styles.submit}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Back to login page</Text>
      </TouchableHighlight>
    </View>
  </Image>;

RegisterSummary.navigationOptions = {
  title: "Email Confirmation",
  headerLeft: null
};

export default RegisterSummary;
