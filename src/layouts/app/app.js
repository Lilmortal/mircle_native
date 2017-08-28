import React, { Component } from "react";
import { View, Text } from "react-native";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";

import { pushNotification } from "../../libs";
import styles from "./styles";

const AppLayout = ({ cameraActive, readQRCode, children }) =>
  <Animatable.View animation="fadeIn" style={styles.appLayout}>
    {cameraActive &&
      <Camera
        style={styles.camera}
        onBarCodeRead={qrCode => readQRCode(qrCode)}
        barCodeTypes={["qr"]}
      >
        <View style={styles.qrCode}>
          <Text style={styles.qrCodeText}>
            {this.state.qrCode}
          </Text>
        </View>
      </Camera>}
    {!cameraActive && children}
  </Animatable.View>;

export default AppLayout;
