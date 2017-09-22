import React from "react";
import { Text } from "react-native";

import { selectFontColor, selectFontWeight } from "../libs";
import styles from "./styles";

export const SmallText = ({ color, bold = false, children, style }) =>
  <Text
    style={[
      styles.smallText,
      selectFontColor(color),
      selectFontWeight(bold),
      style
    ]}
  >
    {children}
  </Text>;
