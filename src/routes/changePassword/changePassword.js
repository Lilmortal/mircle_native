import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "./styles";

const ChangePassword = ({ onPress }) =>
  <View style={styles.changePassword}>
    <View style={styles.central}>
      <Text>New Password</Text>
      <TextInput />

      <Text>Type new password again</Text>
      <TextInput />

      <Button title="Save" onPress={onPress} />
    </View>
  </View>;

export default ChangePassword;
