import React from "react";
import { View, Text } from "react-native";
import moment from "moment";

import ProfileImage from "../../../../components/profileImage";
import { routeKeys, images } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import { uploadProfileImage, registerUser } from "../../../../api";
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

const submit = user => {
  console.log(user);
  return registerUser(user).then(id => {
    console.log(id, user.profileImage);
    if (!user.profileImage.isDefault) {
      uploadProfileImage(user.profileImage, id);
    }
    return Promise.resolve(id);
  });
};

const RegisterAccountSummary = ({
  navigation,
  emailAddress,
  firstName,
  surname,
  password,
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
    password,
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
        submit(user).then(response => {
          console.log(response);
          navigation.navigate(routeKeys.RegisterEmailConfirmation);
        })}
    >
      <View style={styles.profileImage}>
        {profileImage.isDefault
          ? <View>
              <Text>
                You have not uploaded a profile image, a default profile image
                will be provided to you once you registered your account.
              </Text>
            </View>
          : <ProfileImage source={profileImage} size={125} />}
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
