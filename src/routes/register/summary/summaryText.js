import React from "react";
import { Text } from "react-native";

const SummaryText = ({ children }) =>
  <Text style={{ color: "black", marginTop: 10, marginBottom: 10 }}>
    {children}
  </Text>;

export default SummaryText;
