import React from "react";
import { View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Camera = ({ isCameraActive, onPress, onPressOut }) =>
  <View>
    {isCameraActive &&
      <TouchableHighlight onPress={onPressOut}>
        <Icon name="times" color="black" size={45} style={styles.icon} />
      </TouchableHighlight>}
    {!isCameraActive &&
      <TouchableHighlight onPress={onPress}>
        <Icon name="camera" color="black" size={45} style={styles.icon} />
      </TouchableHighlight>}
  </View>;

export default Camera;
