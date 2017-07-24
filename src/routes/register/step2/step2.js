import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";

import images from "../../../config/images";
import styles from "./styles";

const textInputColor = "white";

const RegisterStep2 = ({ navigation }) =>
  <Image source={images.register} style={styles.backgroundImage} blurRadius={2}>
    <View style={styles.stages} />

    <View style={styles.title}>
      <Text style={styles.titleText}>We like to know more about you...</Text>
    </View>
    <View style={styles.inputFields}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="First Name"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
      />
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Last Name"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
      />
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Age"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
      />
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Occupation"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
      />
    </View>
    <View style={styles.submit}>
      <TouchableHighlight
        onPress={() => navigation.navigate("RegisterSummary")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>SUMMARY</Text>
      </TouchableHighlight>
    </View>
  </Image>;

RegisterStep2.navigationOptions = {
  title: "Register step 2"
};

export default RegisterStep2;
