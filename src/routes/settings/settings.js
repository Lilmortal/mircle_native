// @flow

import React, { Component } from "react";
import { View, Text, TextInput, Button, Switch } from "react-native";

import List from "../../components/list";
import Setting from "./setting";
import styles from "./styles";

export default class Settings extends Component {
  state: {
    passwordModalVisible: boolean
  };

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.settings}>
        <View style={styles.container}>
          <Setting title="Account">
            <List isSelectable lastChild>
              <Text>Change Password</Text>
            </List>
          </Setting>

          <Setting title="Notifications">
            <List hasSwitch>
              <Text>Sound</Text>
            </List>
            <List hasSlider>
              <Text>Volume</Text>
            </List>
            <List hasSwitch lastChild>
              <Text>Vibration</Text>
            </List>
          </Setting>

          <Setting title="Extras">
            <List isSelectable>
              <Text>About Mircle</Text>
            </List>
            <List isSelectable lastChild>
              <Text>About the creator of this app</Text>
            </List>
          </Setting>
        </View>
      </View>
    );
  }
}
