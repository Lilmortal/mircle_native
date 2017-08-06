import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Setting = ({ title, children }) =>
  <View>
    <Text style={styles.title}>
      {title}
    </Text>
    <View style={styles.setting}>
    {children}
    </View>
  </View>;

export default Setting;
