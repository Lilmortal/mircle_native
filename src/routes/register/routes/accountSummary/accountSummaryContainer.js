import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as api from "../../../../api";
import { routeKeys } from "../../../../config";
import AccountSummary from "./accountSummary";
import { registrationState } from "../../../../states";

const {
  uploadProfileImageToS3,
  registerUser,
  setProfileImageToDefault,
  setProfileImageUri
} = api;

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

const registerAccount = async (user, navigation) => {
  const id = await registerUser(user);
  if (user.profileImage.isDefault) {
    await setProfileImageToDefault(id);
  } else {
    const uri = await uploadProfileImageToS3(user.profileImage, id);
    await setProfileImageUri(id, uri);
  }
};

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
    registerAccount: async user => {
      try {
        await registerAccount(user, navigation);
        navigation.navigate(routeKeys.RegisterEmailConfirmation);
      } catch (err) {
        console.error(err);
      }
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(AccountSummary);
