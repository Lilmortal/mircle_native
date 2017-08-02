import React from "react";
import { View, TouchableHighlight, Image } from "react-native";

import cameraImage from "./camera.png";
import styles from "./styles";

const Camera = ({ isCameraActive = false, onPress, onPressOut }) =>
  <View>
    {isCameraActive &&
      <TouchableHighlight onPress={onPressOut}>
        <Image source={cameraImage} style={styles.camera} />
      </TouchableHighlight>}
    {!isCameraActive &&
      <TouchableHighlight onPress={onPress}>
        <Image source={cameraImage} style={[styles.camera, styles.cameraOut]} />
      </TouchableHighlight>}
  </View>;

export default Camera;
