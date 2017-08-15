import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AccountSummary from "./accountSummary";
import userDetailsState from "../../../../states/userDetails";

const {
  getEmailAddress,
  getFirstName,
  getSurname,
  getGender,
  getPhoneNumber,
  getBirthDate,
  getOccupation,
  getProfileImage
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
    profileImage: getProfileImage
  });
};

export default connect(mapStateToProps)(AccountSummary);
