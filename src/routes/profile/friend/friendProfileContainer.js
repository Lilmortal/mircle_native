import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getUserById } from "../../../api";
import { routeKeys } from "../../../config";
import Profile from "../profile";
import { friendState } from "../../../states";

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
} = friendState.selectors;

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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { navigation } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
    goToMap: () => {
      navigation.navigate(routeKeys.FriendsMap);
    },
    isAFriend: true
  };
};

export default connect(mapStateToProps, null, mergeProps)(Profile);
