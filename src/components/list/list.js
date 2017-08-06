import React from "react";
import { View, Text, Slider, Switch, TouchableHighlight } from "react-native";

import styles from "./styles";

const List = ({
  children,
  isSelectable = false,
  hasSlider = false,
  hasSwitch = false,
  lastChild = false,
  style
}) =>
  <View style={[styles.list, lastChild && styles.listLastChild, style]}>
    <View style={styles.listContainer}>
      <View style={[styles.listChildren, hasSlider && { flex: 1 }]}>
        {isSelectable
          ? <TouchableHighlight>
              {children}
            </TouchableHighlight>
          : children}
      </View>
      {hasSlider && <Slider style={styles.selectable} />}
      {hasSwitch && <Switch style={styles.selectable} />}
      {isSelectable &&
        <View style={styles.selectable}>
          <Text>></Text>
        </View>}
    </View>
  </View>;

export default List;
