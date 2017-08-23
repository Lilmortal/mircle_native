import React from "react";
import { View, Text } from "react-native";
import moment from "moment";

import ProfileImage from "../../../../components/profileImage";
import { routeKeys, images } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import * as api from "../../../../api";
import styles from "./styles";

const {
  uploadProfileImage,
  registerUser,
  setDefaultProfileImage,
  setProfileImageUri
} = api;

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

const submitUser = async user => {
  const id = await registerUser(user);
  if (user.profileImage.isDefault) {
    await setDefaultProfileImage(id);
  } else {
    const uri = await uploadProfileImage(user.profileImage, id);
    await setProfileImageUri(id, uri);
  }
  return id;
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

  const registerAccount = async () => {
    try {
      const id = await submitUser(user);
      navigation.navigate(routeKeys.RegisterEmailConfirmation);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RegisterLayout title="Is this you?" onPress={registerAccount}>
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
