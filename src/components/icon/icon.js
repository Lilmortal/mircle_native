import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const CustomizedIcon = ({ style, name, color }) =>
  <Icon name={name} color={color} style={[styles.icon, style]} />;

export default CustomizedIcon;
