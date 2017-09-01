import React from "react";
import { Image } from "react-native";

import styles from "./styles";

const ProfileImage = ({ source, size = 100, style, ...props }) => {
  return (
    <Image
      source={source}
      style={[
        styles.profileImage,
        style,
        { width: size },
        { height: size },
        { borderRadius: size / 2 }
      ]}
      {...props}
    />
  );
};

export default ProfileImage;
