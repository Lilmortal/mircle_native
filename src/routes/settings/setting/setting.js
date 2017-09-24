import React from "react";
import { View } from "react-native";

import { RegularText } from "@jacktan/mircle_native_components/text";
import styles from "./styles";

const Setting = ({ title, children }) => (
  <View>
    <RegularText bold style={styles.title}>
      {title}
    </RegularText>
    <View style={styles.setting}>{children}</View>
  </View>
);

export default Setting;
