import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import TextInput from "../../components/textInput";
import Button from "../../components/button";
import Modal from "../../components/modal";
import List from "../../components/list";
import Setting from "./setting";
import styles from "./styles";

const passwordIcon = <Icon name="lock" color="black" />;

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordModalVisible: false,
      aboutMircleModalVisible: false,
      aboutCreatorModalVisible: false
    };
  }

  setPasswordModalVisible = passwordModalVisible => {
    this.setState({
      passwordModalVisible
    });
  };

  setAboutMircleModalVisible = aboutMircleModalVisible => {
    this.setState({
      aboutMircleModalVisible
    });
  };

  setAboutCreatorModalVisible = aboutCreatorModalVisible => {
    this.setState({
      aboutCreatorModalVisible
    });
  };

  render() {
    return (
      <View style={styles.settings}>
        <View style={styles.container}>
          <Setting title="Account">
            <List
              isSelectable
              lastChild
              onPress={() => this.setPasswordModalVisible(true)}
            >
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
            <List
              isSelectable
              onPress={() => this.setAboutMircleModalVisible(true)}
            >
              <Text>About Mircle</Text>
            </List>
            <List
              isSelectable
              onPress={() => this.setAboutCreatorModalVisible(true)}
              lastChild
            >
              <Text>About the creator of this app</Text>
            </List>
          </Setting>
        </View>

        <Modal
          visible={this.state.passwordModalVisible}
          onRequestClose={() => this.setPasswordModalVisible(false)}
          closeOnOutsideClick={false}
          Icon={<Icon name="lock" size={25} />}
          title="Change password"
        >
          <View>
            <TextInput
              Icon={passwordIcon}
              placeholder="Old password"
              color="black"
            />
            <TextInput
              Icon={passwordIcon}
              placeholder="New password"
              color="black"
            />
            <Button
              onPress={() => this.setPasswordModalVisible(false)}
              color="black"
            >
              <Text>Save changes</Text>
            </Button>

            <Button
              onPress={() => this.setPasswordModalVisible(false)}
              color="black"
            >
              <Text>Cancel</Text>
            </Button>
          </View>
        </Modal>

        <Modal
          visible={this.state.aboutMircleModalVisible}
          onRequestClose={() => this.setAboutMircleModalVisible(false)}
          Icon={<Icon name="lock" size={25} />}
          title="About Mircle"
        >
          <Text>Long long time ago</Text>
        </Modal>

        <Modal
          visible={this.state.aboutCreatorModalVisible}
          onRequestClose={() => this.setAboutCreatorModalVisible(false)}
          Icon={<Icon name="user" size={25} />}
          title="About creator"
        >
          <Text>Dont want to add an image on me there</Text>
        </Modal>
      </View>
    );
  }
}
