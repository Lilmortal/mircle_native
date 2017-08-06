import React from "react";
import { View } from "react-native";

import styles from "./styles";

const Feed = ({ children }) =>
  <View style={styles.feed}>
    {children}
  </View>;

export default Feed;
