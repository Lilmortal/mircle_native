import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const BackgroundImage = ({ source, blur, children }) =>
  <Image source={source} style={styles.backgroundImage} blurRadius={blur}>
    {children}
  </Image>;

export default BackgroundImage;
