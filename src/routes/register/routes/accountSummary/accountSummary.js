import React from "react";
import { View, Text } from "react-native";
import moment from "moment";

import { mapGenderValueToLabel } from "../../../../libs";
import ProfileImage from "../../../../components/profileImage";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import styles from "./styles";

const RegisterAccountSummary = ({
  navigation,
  registerAccount,
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
      onPress={() => registerAccount(user, navigation)}
      buttonMessage="SUBMIT"
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
