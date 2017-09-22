import React from "react";
import { Text } from "react-native";

import { selectFontColor, selectFontWeight } from "../libs";
import styles from "./styles";

export const RegularText = ({ color, bold = false, children, style }) =>
  <Text
    style={[
      styles.regularText,
      selectFontColor(color),
      selectFontWeight(bold),
      style
    ]}
  >
    {children}
  </Text>;

export const ButtonText = ({ color, bold = false, children, style }) =>
  <Text
    style={[
      styles.buttonText,
      selectFontColor(color),
      selectFontWeight(bold),
      style
    ]}
  >
    {children}
  </Text>;
