import React from "react";
import { View } from "react-native";

import styles from "./styles";

const AppLayout = ({ children }) =>
  <View style={styles.appLayout}>
    {children}
  </View>;

export default AppLayout;
