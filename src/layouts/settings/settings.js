import React from "react";
import { View, Text, TextInput, Button, Slider, Switch, Modal } from "react-native";

import styles from "./styles";

const toggleModalVisible = (visible) => {
  
}
const Settings = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.list}>
          <Button title="Change password" />
          <Modal visible={}
        </View>
      </View>
      <View style={styles.setting}>
        <Text style={styles.title}>Sound</Text>
        <View style={styles.list}>
          <Text style={styles.listText}>Sound pic</Text>
          <Slider style={styles.slider} />
        </View>
      </View>
      <View style={styles.setting}>
        <Text style={styles.title}>Other</Text>
        <View style={styles.list}>
          <Text style={styles.listText}>Allow Vibrate</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
};

Settings.navigationOptions = {
  title: "Settings",
  headerBackTitle: "Back"
};

export default Settings;
