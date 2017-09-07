import React from "react";
import { View, Slider, Switch, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const List = ({
  children,
  disabled = false,
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
  <TouchableOpacity
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
          disabled={disabled}
          onSlidingComplete={sliderOnRelease}
        />}
      {hasSwitch &&
        <Switch
          style={styles.selectable}
          minimumValue={0}
          maximumValue={10}
          disabled={disabled}
          value={switchValue}
          onValueChange={switchOnPress}
        />}
      {isSelectable &&
        <View style={styles.selectable}>
          <Icon name="angle-double-right" />
        </View>}
    </View>
  </TouchableOpacity>;

export default List;
