import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import ProfilePicture from "../../../components/profilePicture";
import { images } from "../../../config";
import styles from "./styles";

const DrawerPanel = ({ navigation }) =>
  <TouchableHighlight onPress={() => navigation.navigate("Profile")}>
    <Image
      source={images.drawerNavigation}
      style={styles.drawerPanel}
      blurRadius={1}
    >
      <View style={styles.header}>
        <ProfilePicture source={images.anonymous} />
        <Text style={styles.name}>Will Smith</Text>
        <Text style={styles.email}>willsmith@gmail.com</Text>
      </View>
    </Image>
  </TouchableHighlight>;

export default DrawerPanel;
