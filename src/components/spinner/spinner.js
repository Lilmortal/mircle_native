import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";

// There is a freaking bug where animating props being changed does not work. So instead of true or false,
// we hide or show using opacity
const Spinner = ({ style, show, ...props }) => {
  const visible = show ? { opacity: 1 } : { opacity: 0 };
  return (
    <View style={[styles.spinner, visible, style]}>
      <ActivityIndicator size="large" {...props} />
    </View>
  );
};

export default Spinner;
