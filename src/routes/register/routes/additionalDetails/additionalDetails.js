import React from "react";
import { View, Text } from "react-native";

import { routeKeys } from "../../../../config";
import TextInput from "../../components/registerTextInput";
import RegisterLayout from "../../layout/registerLayout";

const RegisterAdditionalDetails = ({ navigation }) =>
  <RegisterLayout
    title="We like to know more about you..."
    onPress={() => navigation.navigate(routeKeys.RegisterAccountSummary)}
  >
    <TextInput placeholder="First Name" />
    <TextInput placeholder="Last Name" />
    <TextInput placeholder="Age" />
    <TextInput placeholder="Occupation" />
  </RegisterLayout>;

export default RegisterAdditionalDetails;
