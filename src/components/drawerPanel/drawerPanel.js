import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import styles from "./styles";

const DrawerPanel = ({ backgroundImage, onPress, blur = 1, children }) =>
  <TouchableHighlight onPress={onPress}>
    <Image
      source={backgroundImage}
      style={styles.drawerPanel}
      blurRadius={blur}
    >
      <View style={styles.header}>
        {children}
      </View>
    </Image>
  </TouchableHighlight>;

export default DrawerPanel;
