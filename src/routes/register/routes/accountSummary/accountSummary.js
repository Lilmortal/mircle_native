import React from "react";
import { View, Text, TextInput } from "react-native";

import ProfilePicture from "../../../../components/profilePicture";
import { routeKeys } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import { registerUser } from "../../../../api";
import styles from "./styles";

const mapGenderValueToLabel = gender => {
  switch (gender) {
    case "M":
      return "Male";
    case "F":
      return "Female";
    case "U":
      return "Unapplicable";
    default:
      return "Unknown";
  }
};

const RegisterAccountSummary = ({
  navigation,
  emailAddress,
  firstName,
  surname,
  gender,
  phoneNumber,
  birthDate,
  occupation,
  profilePicture
}) => {
  const user = {
    emailAddress,
    firstName,
    surname,
    gender,
    phoneNumber,
    birthDate,
    occupation,
    profilePicture
  };

  return (
    <RegisterLayout
      title="Is this you?"
      onPress={() =>
        registerUser(user).then(response =>
          navigation.navigate(routeKeys.RegisterEmailConfirmation)
        )}
    >
      <View style={styles.profilePicture}>
        <ProfilePicture source={profilePicture.image} size={125} />
      </View>
      <View style={styles.biography}>
        <Biography label="Email address" value={emailAddress} />
        <Biography label="Name" value={`${firstName} ${surname}`} />
        <Biography label="Gender" value={() => mapGenderValueToLabel(gender)} />
        <Biography label="Phone Number" value={phoneNumber} />
        <Biography label="Birth Date" value={birthDate} />
        <Biography label="Occupation" value={occupation} lastChild />
      </View>
    </RegisterLayout>
  );
};

export default RegisterAccountSummary;
