import React from "react";
import { View, Text, TextInput } from "react-native";
import moment from "moment";

import ProfileImage from "../../../../components/profileImage";
import { routeKeys, images } from "../../../../config";
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
  profileImage
}) => {
  const user = {
    emailAddress,
    firstName,
    surname,
    gender,
    phoneNumber,
    birthDate,
    occupation,
    profileImage
  };

  return (
    <RegisterLayout
      title="Is this you?"
      onPress={() =>
        registerUser(user).then(response => {
          console.log(response);
          navigation.navigate(routeKeys.RegisterEmailConfirmation);
        })}
    >
      <View style={styles.profileImage}>
        <ProfileImage
          source={images.default ? images.anonymous : profileImage.image}
          size={125}
        />
      </View>
      <View style={styles.biography}>
        <Biography label="Email address" value={emailAddress} />
        <Biography label="Name" value={`${firstName} ${surname}`} />
        <Biography label="Gender" value={mapGenderValueToLabel(gender)} />
        <Biography label="Phone Number" value={phoneNumber} />
        <Biography
          label="Birth Date"
          value={moment(birthDate).format("DD/MM/YYYY")}
        />
        <Biography label="Occupation" value={occupation} lastChild />
      </View>
    </RegisterLayout>
  );
};

export default RegisterAccountSummary;
