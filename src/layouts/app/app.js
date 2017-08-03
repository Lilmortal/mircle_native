import React, { Component } from "react";
import { View, Text, Vibration } from "react-native";
import Camera from "react-native-camera";

import PushNotification from "../../libs/pushNotification";
import styles from "./styles";

const readQRCode = data => {};

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCode: ""
    };
  }

  readQRCode = qrCode => {
    if (qrCode.type === "QR_CODE") {
      this.setState({ qrCode: qrCode.data });
      PushNotification.localNotification({
        title: "Will Smith just added you!",
        message: "You two met at Botany Down Centre."
      });
      //Vibration.vibrate(1000);
    }
  };

  render() {
    const { cameraActive, children } = this.props;

    return (
      <View style={styles.appLayout}>
        {cameraActive &&
          <Camera
            style={styles.camera}
            onBarCodeRead={qrCode => this.readQRCode(qrCode)}
            barCodeTypes={["qr"]}
          >
            <View style={styles.qrCode}>
              <Text style={styles.qrCodeText}>
                {this.state.qrCode}
              </Text>
            </View>
          </Camera>}
        {!cameraActive && children}
      </View>
    );
  }
}

export default AppLayout;
