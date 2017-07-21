// @flow

import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Slider,
  Switch,
  Modal
} from "react-native";

import styles from "./styles";

export default class Settings extends Component {
  static navigationOptions = {
    title: "Settings"
  };

  state: {
    passwordModalVisible: boolean
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      passwordModalVisible: false
    };
  }

  setPasswordModalVisibility = (visible: boolean) => {
    this.setState({ passwordModalVisible: visible });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.setting}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.list}>
            <Button
              title="Change password"
              onPress={() => this.setPasswordModalVisibility(true)}
            />
            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.passwordModalVisible}
              onRequestClose={() => this.setPasswordModalVisibility(false)}
            >
              <View style={styles.modal}>
                <Text>New Password</Text>
                <TextInput />
                <Text>Type new password again</Text>
                <TextInput />

                <Button
                  onPress={() => this.setPasswordModalVisibility(false)}
                  title="Cancel"
                />
                <Button
                  onPress={() => this.setPasswordModalVisibility(false)}
                  title="Close Modal"
                />
              </View>
            </Modal>
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
