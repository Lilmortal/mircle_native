import React from "react";
import { View } from "react-native";

import styles from "./styles";

const BaseLayout = ({ children }) =>
  <View style={styles.baseLayout}>
    {children}
  </View>;

export default BaseLayout;
