import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Profile from "./profile";
import { userDetailsState } from "../../states";

const {
  getEmailAddress,
  getFirstName,
  getSurname,
  getGender,
  getPhoneNumber,
  getBirthDate,
  getOccupation,
  getProfileImage,
  getCreatedOn,
  getLastLoggedIn
} = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    emailAddress: getEmailAddress,
    firstName: getFirstName,
    surname: getSurname,
    gender: getGender,
    phoneNumber: getPhoneNumber,
    birthDate: getBirthDate,
    occupation: getOccupation,
    profileImage: getProfileImage,
    createdOn: getCreatedOn,
    lastLoggedIn: getLastLoggedIn
  });
};

export default connect(mapStateToProps)(Profile);
