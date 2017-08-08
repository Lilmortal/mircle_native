import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const ProfilePicture = ({ source, size = 100, style, ...props }) =>
  <Image
    source={source}
    style={[
      styles.profilePicture,
      style,
      { width: size },
      { height: size },
      { borderRadius: size / 2 }
    ]}
    {...props}
  />;

export default ProfilePicture;
