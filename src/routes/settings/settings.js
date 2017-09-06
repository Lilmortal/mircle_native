import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { validate } from "../../libs";
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
      oldPassword: "",
      oldPasswordValid: false,
      oldPasswordErrorMessage: "",
      newPassword: "",
      newPasswordValid: false,
      newPasswordErrorMessage: "",
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

  setOldPasswordState = oldPassword => {
    this.setState({
      oldPassword
    });
  };

  setNewPasswordState = newPassword => {
    this.setState({
      newPassword
    });
  };

  validateForm = () => {
    const oldPasswordValidation = validate(this.state.oldPassword, "password");
    const newPasswordValidation = validate(this.state.newPassword, "password");

    this.setState({
      oldPasswordValid: oldPasswordValidation.isValid,
      oldPasswordErrorMessage: oldPasswordValidation.errorMessage
    });
    this.setState({
      newPasswordValid: newPasswordValidation.isValid,
      newPasswordErrorMessage: newPasswordValidation.errorMessage
    });

    return oldPasswordValidation.isValid && newPasswordValidation.isValid;
  };

  render() {
    const {
      sound,
      soundVolume,
      vibration,
      updateSound,
      updateSoundVolume,
      updateVibration,
      updateUserPassword
    } = this.props;

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
            <List
              hasSwitch
              switchValue={sound}
              switchOnPress={updatedSound => updateSound(updatedSound)}
            >
              <Text>Sound</Text>
            </List>
            <List
              disabled={!sound}
              hasSlider
              sliderValue={!sound ? 0 : soundVolume}
              sliderOnRelease={updatedSoundVolume =>
                updateSoundVolume(updatedSoundVolume)}
            >
              <Text>Volume</Text>
            </List>
            <List
              hasSwitch
              switchValue={vibration}
              switchOnPress={updatedVibration =>
                updateVibration(updatedVibration)}
              lastChild
            >
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
              secureTextEntry
              onChangeText={password => this.setOldPasswordState(password)}
              onEndEditing={e => {
                const validation = validate(e.nativeEvent.text, "password");
                this.setState({
                  oldPasswordValid: validation.isValid,
                  oldPasswordErrorMessage: validation.errorMessage
                });
              }}
              value={this.state.oldPassword}
              error={this.state.oldPasswordErrorMessage}
              compulsory
            />
            <TextInput
              Icon={passwordIcon}
              placeholder="New password"
              color="black"
              secureTextEntry
              onChangeText={password => this.setNewPasswordState(password)}
              onEndEditing={e => {
                const validation = validate(e.nativeEvent.text, "password");
                this.setState({
                  newPasswordValid: validation.isValid,
                  newPasswordErrorMessage: validation.errorMessage
                });
              }}
              value={this.state.newPassword}
              error={this.state.newPasswordErrorMessage}
              compulsory
            />
            <Button
              onPress={() => {
                if (this.validateForm()) {
                  updateUserPassword(
                    this.state.oldPassword,
                    this.state.newPassword
                  );
                  this.setPasswordModalVisible(false);
                }
              }}
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
