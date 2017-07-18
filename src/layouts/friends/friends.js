import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import styles from "./styles";

const Friends = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      {/*<View style={styles.feed}>
        <Text>Friend 1</Text>
      </View>
      <View style={styles.feed}>
        <Text>Friend 2</Text>
      </View>*/}
      <View style={styles.message}>
        <Text>
          You don't have any friends on Mircle at the moment, start adding new
          friends now!
        </Text>
      </View>
    </View>
  );
};

export default Friends;
