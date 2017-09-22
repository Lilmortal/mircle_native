import React from "react";
import { Text } from "react-native";

import { selectFontColor, selectFontWeight } from "../libs";
import styles from "./styles";

export const LogoText = ({ color, children, style }) =>
  <Text style={[styles.logoText, selectFontColor(color), style]}>
    {children}
  </Text>;

export const TitleText = ({ color, bold = false, children, style }) =>
  <Text
    style={[
      styles.titleText,
      selectFontColor(color),
      selectFontWeight(bold),
      style
    ]}
  >
    {children}
  </Text>;

export const TitleDescriptionText = ({
  color,
  bold = false,
  children,
  style
}) =>
  <Text
    style={[
      styles.titleDescriptionText,
      selectFontColor(color),
      selectFontWeight(bold),
      style
    ]}
  >
    {children}
  </Text>;
