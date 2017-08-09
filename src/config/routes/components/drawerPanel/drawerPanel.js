import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import DrawerPanel from "../../../../components/drawerPanel";
import ProfilePicture from "../../../../components/profilePicture";
import images from "../../../images";
import styles from "./styles";

const NavigationDrawerPanel = ({
  onPress,
  profilePicture,
  firstName,
  surname,
  emailAddress
}) =>
  <DrawerPanel
    backgroundImage={images.drawerNavigationBackground}
    onPress={onPress}
  >
    <ProfilePicture source={profilePicture} />
    <Text style={styles.name}>
      {firstName} {surname}
    </Text>
    <Text style={styles.email}>
      {emailAddress}
    </Text>
  </DrawerPanel>;

export default NavigationDrawerPanel;
