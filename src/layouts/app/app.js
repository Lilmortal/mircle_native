import React from "react";
import { View } from "react-native";
import Camera from "react-native-camera";
import * as Animatable from "react-native-animatable";

import styles from "./styles";

const AppLayout = ({
  id,
  sound,
  soundVolume,
  vibration,
  cameraActive,
  addFriend,
  sendANotification,
  children,
}) => (
  <Animatable.View animation="fadeIn" style={styles.appLayout}>
    {cameraActive && (
      <Camera
        style={styles.camera}
        onBarCodeRead={async qrCode => {
          const friend = await addFriend(qrCode, id);
          sendANotification(friend, sound, soundVolume, vibration);
        }}
        barCodeTypes={["qr"]}
      />
    )}
    {!cameraActive && children}
  </Animatable.View>
);

export default AppLayout;
