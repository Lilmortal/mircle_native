import React, { Component } from "react";
import { View, Platform, BackHandler } from "react-native";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationOptions } from "react-navigation";

import Button from "@jacktan/mircle_native_components/button";
import Modal from "@jacktan/mircle_native_components/modal";
import { ButtonText } from "@jacktan/mircle_native_components/text";

import styles from "./styles";

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutModalVisible: false
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", () => {
        console.log(navigation, navigation.navigate.length);
        this.setLogoutModalVisible(true);
        return true;
      });
    }
  }

  setLogoutModalVisible(logoutModalVisible) {
    this.setState({ logoutModalVisible });
  }

  render() {
    const { cameraActive, readQRCode, children, navigation } = this.props;
    return (
      <Animatable.View animation="fadeIn" style={styles.appLayout}>
        {cameraActive &&
          <Camera
            style={styles.camera}
            onBarCodeRead={qrCode => readQRCode(qrCode)}
            barCodeTypes={["qr"]}
          />}
        {!cameraActive && children}

        <Modal
          visible={this.state.logoutModalVisible}
          onRequestClose={() => this.setLogoutModalVisible(false)}
          Icon={<Icon name="lock" size={25} />}
          title="Are you sure you want to logout?"
        >
          <View>
            <Button
              onPress={() => {
                BackHandler.exitApp();
              }}
              color="black"
            >
              <ButtonText>Yes</ButtonText>
            </Button>

            <Button
              onPress={() => this.setLogoutModalVisible(false)}
              color="black"
            >
              <ButtonText>No</ButtonText>
            </Button>
          </View>
        </Modal>
      </Animatable.View>
    );
  }
}

export default AppLayout;
