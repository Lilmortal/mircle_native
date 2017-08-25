import React from "react";
import { View, Text, Dimensions } from "react-native";

import { NUM_OF_COLUMNS } from "../profile";
import styles from "./styles";

const windowWidth = Dimensions.get("window").width;

const Biography = ({ label, value, style }) =>
  <View
    style={[styles.biography, { width: windowWidth / NUM_OF_COLUMNS }, style]}
  >
    <Text style={styles.value}>
      {value}
    </Text>
    <Text style={styles.label}>
      {label}
    </Text>
  </View>;

export default Biography;
