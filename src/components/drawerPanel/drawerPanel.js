import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const DrawerPanel = ({ backgroundImage, onPress, blur = 1, children }) =>
  <TouchableOpacity onPress={onPress}>
    <Image
      source={backgroundImage}
      style={styles.drawerPanel}
      blurRadius={blur}
    >
      <View style={styles.header}>
        {children}
      </View>
    </Image>
  </TouchableOpacity>;

export default DrawerPanel;
