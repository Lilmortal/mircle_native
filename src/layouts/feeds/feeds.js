import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import styles from "./styles";

const Feeds = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      {/*<View style={styles.feed}>
        <Text>Update facebook</Text>
      </View>
      <View style={styles.feed}>
        <Text>Update facebook</Text>
      </View>*/}
      <View style={styles.message}>
        <Text>Start adding new friends to populate your feeds!</Text>
      </View>
    </View>
  );
};

export default Feeds;
