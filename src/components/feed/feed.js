import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Feed = ({ children, isSelectable = false }) =>
  <View style={styles.feed}>
    <View style={styles.children}>
      {children}
    </View>
    {isSelectable &&
      <View style={styles.selectable}>
        <Text>></Text>
      </View>}
  </View>;

export default Feed;
