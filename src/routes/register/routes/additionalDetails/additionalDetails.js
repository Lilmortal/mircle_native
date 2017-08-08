import React from "react";
import { View, Text } from "react-native";

import { routeKeys } from "../../../../config";
import { Picker, DatePicker, TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import userDetailsState from "../../../../states/userDetails";

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
      items={[
        {
          label: "Male",
          value: "M"
        },
        {
          label: "Female",
          value: "F"
        },
        {
          label: "Unapplicable",
          value: "U"
        }
      ]}
    />

    <DatePicker
      title="Birth Date"
      date={birthDate}
      onDateChange={date => registerBirthDate(date)}
    />

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
