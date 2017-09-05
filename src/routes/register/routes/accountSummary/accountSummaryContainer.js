import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as api from "../../../../api";
import { routeKeys } from "../../../../config";
import AccountSummary from "./accountSummary";
import { registrationState } from "../../../../states";

const { register, registerProfileImage } = api;

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
    register: async (user, profileImage) => {
      try {
        await register(user);
        if (profileImage.isDefault) {
          await registerProfileImage(user.emailAddress);
        } else {
          await registerProfileImage(user.emailAddress, profileImage);
        }
        navigation.navigate(routeKeys.RegisterEmailConfirmation);
      } catch (err) {
        Alert.alert("Account is not created due to an error", err.toString());
      }
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(AccountSummary);
