import React from "react";
import { View, Text, TextInput } from "react-native";

import ProfilePicture from "../../../../components/profilePicture";

import { images, routeKeys } from "../../../../config";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const RegisterAccountSummary = ({ navigation }) =>
  <RegisterLayout
    title="Is this you?"
    onPress={() => navigation.navigate(routeKeys.RegisterEmailConfirmation)}
  >
    <View style={styles.profilePicture}>
      <ProfilePicture source={images.anonymous} />
    </View>
    <View style={styles.biographies}>
      <View style={styles.biography}>
        <Text style={styles.biographyText}>Will Smith</Text>
        <Text style={styles.biographyTitle}>Name</Text>
      </View>
      <View style={styles.biography}>
        <Text style={styles.biographyText}>willsmith@gmail.com</Text>
        <Text style={styles.biographyTitle}>Email</Text>
      </View>
      <View style={styles.biography}>
        <Text style={styles.biographyText}>45</Text>
        <Text style={styles.biographyTitle}>Age</Text>
      </View>
      <View style={styles.biography}>
        <Text style={styles.biographyText}>Actor</Text>
        <Text style={styles.biographyTitle}>Occupation</Text>
      </View>
    </View>
  </RegisterLayout>;

export default RegisterAccountSummary;
