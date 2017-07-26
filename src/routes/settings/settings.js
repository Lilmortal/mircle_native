// @flow

import React, { Component } from "react";
import { View, Text, TextInput, Button, Slider, Switch } from "react-native";

import Icon from "../../components/icon";
import colors from "../../config/color-palette";
import images from "../../config/images";
import styles from "./styles";

export default class Settings extends Component {
  static navigationOptions = {
    title: "Settings",
    drawerIcon: () => <Icon source={images.settingsIcon} />,
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: colors.red
    }
  };

  state: {
    passwordModalVisible: boolean
  };

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.setting}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.profile}>
            <View style={styles.profileBlock}>
              <Text style={styles.listText}>Current password</Text>
              <TextInput />
            </View>
            <View style={styles.profileBlock}>
              <Text style={styles.listText}>New password</Text>
              <TextInput />
            </View>
            <Button
              title="Change password"
              style={styles.profileButton}
              onPress={() => {}}
            />
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
  }
}
