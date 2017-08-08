import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Biography = ({ label, value }) =>
  <View style={styles.biography}>
    <View style={styles.biographyLabel}>
      <Text style={styles.biographyLabelText}>
        {label}
      </Text>
    </View>
    <View style={styles.biographyValue}>
      <Text style={styles.biographyValueText}>
        {value}
      </Text>
    </View>
  </View>;

export default Biography;
