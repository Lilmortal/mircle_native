import React, { Component } from "react";
import { View, Text } from "react-native";

import Camera from "react-native-camera";
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
    console.log(qrCode);
    if (qrCode.type === "QR_CODE") this.setState({ qrCode: qrCode.data });
  };

  render() {
    const { cameraActive, children } = this.props;

    return (
      <View style={styles.appLayout}>
        {cameraActive &&
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
            style={styles.camera}
            onBarCodeRead={qrCode => this.readQRCode(qrCode)}
            //aspect={Camera.constants.Aspect.fill}
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
