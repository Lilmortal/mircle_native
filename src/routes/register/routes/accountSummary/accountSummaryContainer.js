import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as api from "../../../../api";
import { routeKeys } from "../../../../config";
import AccountSummary from "./accountSummary";
import { registrationState } from "../../../../states";

const { registerUser, setUserImage } = api;

const {
  getEmailAddress,
  getFirstName,
  getSurname,
  getPassword,
  getGender,
  getPhoneNumber,
  getBirthDate,
  getOccupation,
  getProfileImage
} = registrationState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    emailAddress: getEmailAddress,
    firstName: getFirstName,
    surname: getSurname,
    password: getPassword,
    gender: getGender,
    phoneNumber: getPhoneNumber,
    birthDate: getBirthDate,
    occupation: getOccupation,
    profileImage: getProfileImage
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { navigation } = ownProps;
  return {
    ...stateProps,
    ...ownProps,
    registerUser: async (user, profileImage) => {
      try {
        await registerUser(user);
        if (profileImage.isDefault) {
          await setUserImage(user.emailAddress);
        } else {
          await setUserImage(user.emailAddress, profileImage);
        }
        navigation.navigate(routeKeys.RegisterEmailConfirmation);
      } catch (err) {
        console.log(err);
        Alert.alert("Account is not created due to an error", err.toString());
      }
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(AccountSummary);
