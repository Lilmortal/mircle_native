import React from "react";
import { View, Picker } from "react-native";

import styles from "./styles";

const CustomizedPicker = ({ selectedValue, onValueChange, items }) =>
  <View style={styles.picker}>
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      {items.map((item, key) => {
        return <Picker.Item label={item.label} value={item.value} key={key} />;
      })}
    </Picker>
  </View>;

export default CustomizedPicker;
