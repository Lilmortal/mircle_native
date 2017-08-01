import React from "react";
import { View } from "react-native";

import Camera from "react-native-camera";
import styles from "./styles";

const AppLayout = ({ cameraActive, children }) => {
  return (
    <View style={styles.appLayout}>
      {cameraActive &&
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.camera}
          onBarCodeRead={(data, bound) => console.log(data, bound)}
          //aspect={Camera.constants.Aspect.fill}
        />}
      {!cameraActive && children}
    </View>
  );
};

export default AppLayout;
