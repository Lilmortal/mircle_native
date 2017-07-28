import React from "react";
import { View } from "react-native";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";
import styles from "./styles";

const LoginLayout = ({ children }) =>
  <BackgroundImage source={images.city1}>
    <View style={styles.loginLayout}>
      {children}
    </View>
  </BackgroundImage>;

export default LoginLayout;
