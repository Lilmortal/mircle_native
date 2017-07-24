import React from "react";
import { Text } from "react-native";

const SummaryText = ({ children }) =>
  <Text style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
    {children}
  </Text>;

export default SummaryText;
