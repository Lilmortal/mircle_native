import React from "react";
import { View, Text } from "react-native";
import DatePicker from "react-native-datepicker";

import styles from "./styles";

const RegisterDatePicker = ({ title, date, onDateChange }) =>
  <View style={styles.datePickerContainer}>
    <View style={styles.dateTextContainer}>
      <Text style={styles.dateText}>
        {title}
      </Text>
    </View>
    <DatePicker
      style={styles.datePicker}
      date={date}
      placeholder="Birth date"
      format="DD/MM/YYYY"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onDateChange={onDateChange}
    />
  </View>;

export default RegisterDatePicker;
