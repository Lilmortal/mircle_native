import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const ProfilePicture = ({ source, style }) =>
  <Image source={source} style={[styles.profilePicture, style]} />;

export default ProfilePicture;
