import React from "react";
import { View } from "react-native";
import DatePicker from "react-native-datepicker";

import { RegularText } from "../text";
import styles from "./styles";

const CustomizedDatePicker = ({ title, value, onDateChange, placeholder }) =>
  <View style={styles.datePickerContainer}>
    {title &&
      <View style={styles.dateTextContainer}>
        <RegularText>
          {title}
        </RegularText>
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
