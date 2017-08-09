import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Biography = ({ label, value, style }) =>
  <View style={[styles.biography, style]}>
    <Text style={styles.value}>
      {value}
    </Text>
    <Text style={styles.label}>
      {label}
    </Text>
  </View>;

export default Biography;
