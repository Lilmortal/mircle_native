import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { validate } from "../../libs";
import { RegularText, ButtonText } from "../../components/text";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import Modal from "../../components/modal";
import ListItem from "../../components/listItem";
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
            <ListItem
              isSelectable
              lastChild
              onPress={() => this.setPasswordModalVisible(true)}
            >
              <RegularText>Change Password</RegularText>
            </ListItem>
          </Setting>

          <Setting title="Notifications">
            <ListItem
              hasSwitch
              switchValue={sound}
              switchOnPress={updatedSound => updateSound(updatedSound)}
            >
              <RegularText>Sound</RegularText>
            </ListItem>
            <ListItem
              disabled={!sound}
              hasSlider
              sliderValue={!sound ? 0 : soundVolume}
              sliderOnRelease={updatedSoundVolume =>
                updateSoundVolume(updatedSoundVolume)}
            >
              <RegularText>Volume</RegularText>
            </ListItem>
            <ListItem
              hasSwitch
              switchValue={vibration}
              switchOnPress={updatedVibration =>
                updateVibration(updatedVibration)}
              lastChild
            >
              <RegularText>Vibration</RegularText>
            </ListItem>
          </Setting>

          <Setting title="Extras">
            <ListItem
              isSelectable
              onPress={() => this.setAboutMircleModalVisible(true)}
            >
              <RegularText>About Mircle</RegularText>
            </ListItem>
            <ListItem
              isSelectable
              onPress={() => this.setAboutCreatorModalVisible(true)}
              lastChild
            >
              <RegularText>About the creator of this app</RegularText>
            </ListItem>
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
              <ButtonText>Save changes</ButtonText>
            </Button>

            <Button
              onPress={() => this.setPasswordModalVisible(false)}
              color="black"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </View>
        </Modal>

        <Modal
          visible={this.state.aboutMircleModalVisible}
          onRequestClose={() => this.setAboutMircleModalVisible(false)}
          Icon={<Icon name="lock" size={25} />}
          title="About Mircle"
        >
          <RegularText>Long long time ago</RegularText>
        </Modal>

        <Modal
          visible={this.state.aboutCreatorModalVisible}
          onRequestClose={() => this.setAboutCreatorModalVisible(false)}
          Icon={<Icon name="user" size={25} />}
          title="About creator"
        >
          <RegularText>Dont want to add an image on me there</RegularText>
        </Modal>
      </View>
    );
  }
}
