import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const BackgroundImage = ({ source, children }) =>
  <Image source={source} style={styles.backgroundImage} blurRadius={2}>
    {children}
  </Image>;

export default BackgroundImage;
