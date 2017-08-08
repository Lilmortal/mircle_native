import React from "react";
import { View, Text, Picker } from "react-native";
import DatePicker from "react-native-datepicker";

import { routeKeys } from "../../../../config";
import TextInput from "../../components/registerTextInput";
import RegisterLayout from "../../layout/registerLayout";
import userDetailsState from "../../../../states/userDetails";
import styles from "./styles";

const RegisterAdditionalDetails = ({
  navigation,
  birthDate,
  gender,
  registerFirstName,
  registerSurname,
  registerGender,
  registerBirthDate,
  registerPhoneNumber,
  registerOccupation,
  registerProfilePicture
}) =>
  <RegisterLayout
    title="We like to know more about you..."
    onPress={() => navigation.navigate(routeKeys.RegisterProfilePictureUpload)}
  >
    <TextInput
      placeholder="First Name"
      onChangeText={firstName => registerFirstName(firstName)}
    />
    <TextInput
      placeholder="Last Name"
      onChangeText={surname => registerSurname(surname)}
    />
    <Picker
      selectedValue={gender}
      onValueChange={gender => registerGender(gender)}
    >
      <Picker.Item label="Male" value="M" />
      <Picker.Item label="Female" value="F" />
      <Picker.Item label="Unapplicable" value="U" />
    </Picker>

    <View style={styles.birthDatePickerContainer}>
      <View style={styles.birthDateTextContainer}>
        <Text style={styles.birthDateText}>Birth Date</Text>
      </View>
      <DatePicker
        style={styles.birthDatePicker}
        date={birthDate}
        placeholder="Birth date"
        format="DD/MM/YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={date => registerBirthDate(date)}
      />
    </View>

    <TextInput
      placeholder="Phone Number"
      onChangeText={phoneNumber => registerPhoneNumber(phoneNumber)}
    />
    <TextInput
      placeholder="Occupation"
      onChangeText={occupation => registerOccupation(occupation)}
    />
  </RegisterLayout>;

export default RegisterAdditionalDetails;
