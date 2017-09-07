import React from "react";
import { View, Text } from "react-native";
import DatePicker from "react-native-datepicker";

import styles from "./styles";

const CustomizedDatePicker = ({ title, value, onDateChange, placeholder }) =>
  <View style={styles.datePickerContainer}>
    {title &&
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>
          {title}
        </Text>
      </View>}
    <DatePicker
      style={styles.datePicker}
      customStyles={{
        dateIcon: {},
        dateInput: {
          borderWidth: 0
        }
      }}
      date={value}
      placeholder={placeholder}
      format="DD/MM/YYYY"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={onDateChange}
    />
  </View>;

export default CustomizedDatePicker;
