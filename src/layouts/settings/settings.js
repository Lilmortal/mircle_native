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

const toggleModalVisible = visible => {};

class Settings extends Component {
  static navigationOptions = {
    title: "Settings",
    headerBackTitle: "Back"
  };

  constructor(props) {
    super(props);
    this.state = {
      passwordModalVisible: false
    };
  }

  togglePasswordModal() {
    this.setState({ passwordModalVisible: !this.state.passwordModalVisible });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.setting}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.list}>
            <Button
              title="Change password"
              onPress={this.togglePasswordModal.bind(this)}
            />
            <Modal
              visible={this.state.passwordModalVisible}
              onRequestClose={this.togglePasswordModal.bind(this)}
            >
              <View>
                <Text>New Password</Text>
                <TextInput />
                <Text>Type new password again</Text>
                <TextInput />

                <Button
                  onPress={this.togglePasswordModal.bind(this)}
                  title="Cancel"
                />
                <Button
                  onPress={this.togglePasswordModal.bind(this)}
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

export default Settings;
