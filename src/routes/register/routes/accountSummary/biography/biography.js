import React from "react";
import { View } from "react-native";

import { RegularText } from "../../../../../components/text";
import styles from "./styles";

const Biography = ({ label, value, lastChild }) =>
  <View style={[styles.biography, lastChild && { marginBottom: 0 }]}>
    <View style={styles.biographyLabel}>
      <RegularText bold>
        {label}
      </RegularText>
    </View>
    <View style={styles.biographyValue}>
      <RegularText>
        {value}
      </RegularText>
    </View>
  </View>;

export default Biography;
