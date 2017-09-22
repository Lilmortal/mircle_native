import React from "react";
import { View } from "react-native";

import { RegularText, SmallText } from "../../../../../components/text";
import styles from "./styles";

const Biography = ({ label, value, lastChild }) =>
  <View style={[styles.biography, lastChild && { marginBottom: 0 }]}>
    <View style={styles.biographyLabel}>
      <RegularText bold>
        {label}
      </RegularText>
    </View>
    <View style={styles.biographyValue}>
      <SmallText>
        {value}
      </SmallText>
    </View>
  </View>;

export default Biography;
