import React from "react";
import * as Animatable from "react-native-animatable";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";
import styles from "./styles";

const LoginLayout = ({ children }) =>
  <BackgroundImage source={images.loginBackground}>
    <Animatable.View animation="fadeIn" style={styles.login}>
      {children}
    </Animatable.View>
  </BackgroundImage>;

export default LoginLayout;
