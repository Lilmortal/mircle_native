import React from "react";
import { View, Text, TextInput } from "react-native";
import moment from "moment";

import ProfilePicture from "../../../../components/profilePicture";
import { images, routeKeys } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import Biography from "./biography";
import styles from "./styles";

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
}) =>
  <RegisterLayout
    title="Is this you?"
    onPress={() => navigation.navigate(routeKeys.RegisterEmailConfirmation)}
    style={styles.accountSummary}
  >
    <View style={styles.profilePicture}>
      <ProfilePicture source={images.anonymous} />
    </View>
    <View style={styles.biography}>
      <Biography label="Email address" value={emailAddress} />
      <Biography label="First Name" value={firstName} />
      <Biography label="Surname" value={surname} />
      <Biography label="Gender" value={gender} />
      <Biography label="Phone Number" value={phoneNumber} />
      <Biography
        label="Birth Date"
        value={moment(birthDate).format("DD/MM/YYYY")}
      />
      <Biography label="Occupation" value={occupation} />
    </View>
  </RegisterLayout>;

export default RegisterAccountSummary;
