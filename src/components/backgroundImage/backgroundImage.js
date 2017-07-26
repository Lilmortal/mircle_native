import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const BackgroundImage = ({ source, children }) =>
  <Image source={source} style={styles.backgroundImage}>
    {children}
  </Image>;

export default BackgroundImage;
