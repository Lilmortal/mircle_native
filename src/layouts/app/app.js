import React, { Component } from "react";
import { View, Platform, BackHandler } from "react-native";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationOptions } from "react-navigation";

import Button from "@jacktan/mircle_native_components/button";
import Modal from "@jacktan/mircle_native_components/modal";
import { ButtonText } from "@jacktan/mircle_native_components/text";

import { routeKeys } from "../../config";

import styles from "./styles";

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutModalVisible: false
    };
  }

  componentDidMount() {
    const { navigation, navigator, stacks, updateStack, popStack } = this.props;

    //console.log("DIDMOUNT " + stacks);
    //when u click back, this adds it back
    if (stacks[stacks.length - 1] !== navigation.state.routeName) {
      updateStack(navigation.state.routeName);
      // This is because stacks inside hardwareBackPress is not updated due to it being a callback
      //stacks.push(navigation.state.routeName);
    }

    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", () =>
        this.backHandler()
      );
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", () =>
      this.backHandler()
    );
  }

  backHandler = () => {
    const { navigation, stacks, popStack } = this.props;
    // Check if the previous stack is the login page
    if (stacks[stacks.length - 2] === routeKeys.Login) {
      this.setLogoutModalVisible(true);
      return true;
    } else {
      popStack();
      //stacks.pop();
      //console.log("BACK " + stacks, stacks[stacks.length - 1]);
      navigation.navigate(stacks[stacks.length - 2]);
    }

    return true;
  };

  setLogoutModalVisible(logoutModalVisible) {
    this.setState({ logoutModalVisible });
  }

  render() {
    const {
      cameraActive,
      readQRCode,
      children,
      navigation,
      clearStacks
    } = this.props;
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
                clearStacks();
                navigation.goBack(null);
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
