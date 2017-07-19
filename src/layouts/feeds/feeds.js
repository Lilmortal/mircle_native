// @flow

import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Feeds = () =>
  <View style={styles.container}>
    {/* <View style={styles.feed}>
        <Text>Update facebook</Text>
      </View>
      <View style={styles.feed}>
        <Text>Update facebook</Text>
      </View> */}
    <View style={styles.message}>
      <Text>Start adding new friends to populate your feeds!</Text>
    </View>
  </View>;

export default Feeds;
