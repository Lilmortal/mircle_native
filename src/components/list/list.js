import React from "react";
import { View, Text, Slider, Switch, TouchableHighlight } from "react-native";

import styles from "./styles";

const List = ({
  children,
  isSelectable = false,
  hasSlider = false,
  hasSwitch = false,
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
      {hasSlider && <Slider style={styles.selectable} />}
      {hasSwitch && <Switch style={styles.selectable} />}
      {isSelectable &&
        <View style={styles.selectable}>
          <Text>></Text>
        </View>}
    </View>
  </TouchableHighlight>;

export default List;
