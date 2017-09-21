import React, { Component } from "react";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

const AppLayout = ({ cameraActive, readQRCode, children }) =>
  <Animatable.View animation="fadeIn" style={styles.appLayout}>
    {cameraActive &&
      <Camera
        style={styles.camera}
        onBarCodeRead={qrCode => readQRCode(qrCode)}
        barCodeTypes={["qr"]}
      />}
    {!cameraActive && children}
  </Animatable.View>;

export default AppLayout;
