import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import images from "../../config/images";
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
          <Image
            source={images.fingerprint}
            style={styles.fingerprint}
            resizeMode="cover"
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

Login.navigationOptions = {
  title: "Logout",
  tabBarVisible: false,
  header: false
};

export default Login;
