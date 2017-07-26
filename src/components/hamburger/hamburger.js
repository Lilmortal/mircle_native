import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";

import styles from "./styles";

const Hamburger = ({ onPress }) =>
  <TouchableWithoutFeedback onPress={onPress}>
    <View
      style={{
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        height: 35
      }}
    >
      <View
        style={{
          height: 3,
          marginLeft: 0,
          width: 25,
          marginBottom: 0,
          backgroundColor: "white"
        }}
      />
      <View
        style={{
          height: 3,
          width: 25,
          opacity: 1,
          backgroundColor: "white",
          marginTop: 4
        }}
      />
      <View
        style={{
          height: 3,
          marginLeft: 0,
          width: 25,
          backgroundColor: "white",
          marginTop: 4
        }}
      />
    </View>
  </TouchableWithoutFeedback>;

type HamburgerProps = {
  onPress: ?Function
};

const HamburgerContainer = ({ onPress }: HamburgerProps) =>
  <View style={styles.hamburger}>
    <Hamburger onPress={onPress} />
  </View>;

export default HamburgerContainer;
