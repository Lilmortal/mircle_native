import React from "react";
import { View, Text, TextInput, TouchableHighlight, Image } from "react-native";

import images from "../../../config/images";
import styles from "./styles";

const textInputColor = "white";

const RegisterStep1 = ({ navigation }) =>
  <Image source={images.register} style={styles.backgroundImage} blurRadius={2}>
    <View style={styles.stages} />

    <View style={styles.title}>
      <Text style={styles.titleText}>CREATE ACCOUNT</Text>
    </View>
    <View style={styles.inputFields}>
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Email"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
      />
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        placeholder="Password"
        placeholderTextColor={textInputColor}
        selectionColor={textInputColor}
        underlineColorAndroid={textInputColor}
        secureTextEntry
      />
    </View>
    <View style={styles.submit}>
      <TouchableHighlight
        onPress={() => navigation.navigate("RegisterStep2")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableHighlight>
    </View>
  </Image>;

RegisterStep1.navigationOptions = {
  title: "Register step 1"
};

export default RegisterStep1;
