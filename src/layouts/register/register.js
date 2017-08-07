import React from "react";
import * as Animatable from "react-native-animatable";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";

import styles from "./styles";

const RegisterLayout = ({ children }) =>
  <BackgroundImage source={images.registerBackground}>
    <Animatable.View animation="fadeIn" style={styles.register}>
      {children}
    </Animatable.View>
  </BackgroundImage>;

export default RegisterLayout;
