import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";

import SummaryText from "./summaryText";
import images from "../../../config/images";
import styles from "./styles";

const textInputColor = "white";

const RegisterSummary = ({ navigation }) =>
  <Image source={images.register} style={styles.backgroundImage} blurRadius={2}>
    <View style={styles.stages} />

    <View style={styles.title}>
      <Text style={styles.titleText}>Is this you?</Text>
    </View>
    <View style={styles.summaryBody}>
      <View style={styles.summary}>
        <SummaryText>Name: Will Smith</SummaryText>
        <SummaryText>Email: willsmith@gmail.com</SummaryText>
        <SummaryText>Age: 45</SummaryText>
        <SummaryText>Occupation: Actor</SummaryText>
      </View>
    </View>
    <View style={styles.submit}>
      <TouchableHighlight
        onPress={() => navigation.navigate("RegisterEmailConfirmation")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>YES</Text>
      </TouchableHighlight>
    </View>
  </Image>;

RegisterSummary.navigationOptions = {
  title: "Summary"
};

export default RegisterSummary;
