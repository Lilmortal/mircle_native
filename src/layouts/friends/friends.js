import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Friends = () =>
  <View style={styles.container}>
    {/* <View style={styles.feed}>
        <Text>Friend 1</Text>
      </View>
      <View style={styles.feed}>
        <Text>Friend 2</Text>
      </View> */}
    <View style={styles.message}>
      <Text>
        You don&#39;t have any friends on Mircle at the moment, start adding new
        friends now!
      </Text>
    </View>
  </View>;

export default Friends;
