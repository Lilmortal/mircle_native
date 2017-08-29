import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import DrawerPanel from "../../../../components/drawerPanel";
import ProfileImage from "../../../../components/profileImage";
import images from "../../../images";
import styles from "./styles";

const NavigationDrawerPanel = ({
  onPress,
  profileImage,
  firstName,
  surname,
  emailAddress
}) =>
  <DrawerPanel
    backgroundImage={images.drawerNavigationBackground}
    onPress={onPress}
  >
    <ProfileImage source={profileImage} />
    <Text style={styles.name}>
      {firstName} {surname}
    </Text>
    <Text style={styles.email}>
      {emailAddress}
    </Text>
  </DrawerPanel>;

export default NavigationDrawerPanel;
