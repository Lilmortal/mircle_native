import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import BackgroundImage from "../../../components/backgroundImage";
import ProfilePicture from "../../../components/profilePicture";
import Button from "../../../components/button";

import colors from "../../../config/color-palette";
import SummaryText from "./summaryText";
import images from "../../../config/images";
import registerStyles from "../styles";
import styles from "./styles";

const RegisterSummary = ({ navigation }) =>
  <BackgroundImage source={images.register1}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>Is this you?</Text>
    </View>
    <View style={styles.summaries}>
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
    </View>
    <View style={registerStyles.submitArea}>
      <Button
        onPress={() => navigation.navigate("RegisterEmailConfirmation")}
        style={registerStyles.button}
      >
        <Text style={registerStyles.buttonText}>YES</Text>
      </Button>
    </View>
  </BackgroundImage>;

RegisterSummary.navigationOptions = {
  title: "Summary",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.red
  }
};

export default RegisterSummary;
