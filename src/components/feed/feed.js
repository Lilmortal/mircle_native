import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Feed = ({ children, isSelectable = false }) =>
  <View style={styles.feed}>
    <View style={styles.children}>
      {children}
    </View>
    {isSelectable &&
      <View style={styles.selectable}>
        <Icon name="angle-double-right" />
      </View>}
  </View>;

export default Feed;
