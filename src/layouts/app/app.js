import React, { Component } from "react";
import { View, Text } from "react-native";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";

import { pushNotification } from "../../libs";
import styles from "./styles";

const readQRCode = data => {};

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCode: ""
    };
  }

  readQRCode = (qrCode, sound, soundVolume, vibration, name) => {
    if (qrCode.type === "QR_CODE") {
      this.setState({ qrCode: qrCode.data });
      pushNotification.localNotification({
        title: `${name} just added you!`,
        message: "You two met at Botany Down Centre.",
        playSound: sound,
        number: soundVolume,
        vibrate: vibration
      });
    }
  };

  render() {
    const {
      cameraActive,
      firstName,
      surname,
      sound,
      soundVolume,
      vibration,
      children
    } = this.props;

    return (
      <Animatable.View animation="fadeIn" style={styles.appLayout}>
        {cameraActive &&
          <Camera
            style={styles.camera}
            onBarCodeRead={qrCode =>
              this.readQRCode(
                qrCode,
                sound,
                soundVolume,
                vibration,
                `${firstName} ${surname}`
              )}
            barCodeTypes={["qr"]}
          >
            <View style={styles.qrCode}>
              <Text style={styles.qrCodeText}>
                {this.state.qrCode}
              </Text>
            </View>
          </Camera>}
        {!cameraActive && children}
      </Animatable.View>
    );
  }
}

export default AppLayout;
