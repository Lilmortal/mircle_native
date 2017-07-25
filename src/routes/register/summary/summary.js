import React from "react";
import { View, Text, TextInput, Image } from "react-native";

import BackgroundImage from "../../../components/backgroundImage";
import ProfilePicture from "../../../components/profilePicture";
import Button from "../../../components/button";

import SummaryText from "./summaryText";
import images from "../../../config/images";
import registerStyles from "../styles";
import styles from "./styles";

const RegisterSummary = ({ navigation }) =>
  <BackgroundImage source={images.register}>
    <View style={registerStyles.title}>
      <Text style={registerStyles.titleText}>Is this you?</Text>
    </View>
    <View style={styles.summaryBody}>
      <View style={styles.profilePicture}>
        <ProfilePicture source={images.anonymous} />
      </View>
      <View style={styles.summaries}>
        <View style={styles.summary}>
          <Text style={styles.summaryDescription}>Will Smith</Text>
          <Text style={styles.summaryTitle}>Name</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.summaryDescription}>willsmith@gmail.com</Text>
          <Text style={styles.summaryTitle}>Email</Text>
        </View>
        {/*<SummaryText>Email: willsmith@gmail.com</SummaryText>
        <SummaryText>Age: 45</SummaryText>
        <SummaryText>Occupation: Actor</SummaryText>*/}
      </View>
    </View>
    <View style={registerStyles.submitArea}>
      <Button onPress={() => navigation.navigate("RegisterEmailConfirmation")}>
        <Text style={registerStyles.buttonText}>YES</Text>
      </Button>
    </View>
  </BackgroundImage>;

RegisterSummary.navigationOptions = {
  title: "Summary"
};

export default RegisterSummary;
