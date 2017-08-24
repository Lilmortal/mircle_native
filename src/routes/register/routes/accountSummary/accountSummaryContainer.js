import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import * as api from "../../../../api";
import { routeKeys } from "../../../../config";
import AccountSummary from "./accountSummary";
import { registrationState } from "../../../../states";

const {
  uploadProfileImageToS3,
  registerUser,
  setDefaultProfileImage,
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

const registerAccount = async (user, navigation) => {
  const id = await registerUser(user);
  if (user.profileImage.isDefault) {
    await setDefaultProfileImage(id);
  } else {
    const uri = await uploadProfileImageToS3(user.profileImage, id);
    await setProfileImageUri(id, uri);
  }
  navigation.navigate(routeKeys.RegisterEmailConfirmation);
};

const mapDispatchToProps = dispatch => {
  return {
    registerAccount: async (user, navigation) => {
      try {
        await registerAccount(user, navigation);
      } catch (err) {
        console.error(err);
      }
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountSummary);
