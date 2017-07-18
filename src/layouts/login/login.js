import React from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";

import styles from "./styles";

const Login = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Mircle</Text>
      </View>

      <View style={styles.scanner}>
        <TouchableHighlight
          style={styles.scannerText}
          onPress={() => navigate("QrCode")}
        >
          <Text>Authenticate</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false
};

export default Login;
