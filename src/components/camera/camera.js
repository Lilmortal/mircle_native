import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Camera = ({ isCameraActive, onPress, onPressOut }) =>
  <View>
    {isCameraActive &&
      <TouchableOpacity onPress={onPressOut}>
        <Icon name="times" color="black" size={45} style={styles.icon} />
      </TouchableOpacity>}
    {!isCameraActive &&
      <TouchableOpacity onPress={onPress}>
        <Icon name="camera" color="black" size={45} style={styles.icon} />
      </TouchableOpacity>}
  </View>;

export default Camera;
