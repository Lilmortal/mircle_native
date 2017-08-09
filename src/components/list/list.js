import React from "react";
import { View, Text, Slider, Switch, TouchableHighlight } from "react-native";

import styles from "./styles";

const List = ({
  children,
  isSelectable = false,
  hasSlider = false,
  sliderValue,
  sliderOnRelease,
  hasSwitch = false,
  switchValue,
  switchOnPress,
  lastChild = false,
  onPress,
  style
}) =>
  <TouchableHighlight
    onPress={onPress}
    style={[styles.list, lastChild && styles.listLastChild, style]}
  >
    <View style={styles.listContainer}>
      <View style={[styles.listChildren, hasSlider && { flex: 1 }]}>
        {children}
      </View>
      {hasSlider &&
        <Slider
          style={styles.selectable}
          value={sliderValue}
          onSlidingComplete={sliderOnRelease}
        />}
      {hasSwitch &&
        <Switch
          style={styles.selectable}
          minimumValue={0}
          maximumValue={10}
          value={switchValue}
          onValueChange={switchOnPress}
        />}
      {isSelectable &&
        <View style={styles.selectable}>
          <Text>></Text>
        </View>}
    </View>
  </TouchableHighlight>;

export default List;
