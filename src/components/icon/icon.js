import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const Icon = ({ style, source }) =>
  <Image source={source} style={[style, styles.icon]} />;

export default Icon;
