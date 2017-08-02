import React from "react";
import { View } from "react-native";

import BackgroundImage from "../../components/backgroundImage";
import { images } from "../../config";
import styles from "./styles";

const LoginLayout = ({ children }) =>
  <BackgroundImage source={images.city}>
    {children}
  </BackgroundImage>;

export default LoginLayout;
