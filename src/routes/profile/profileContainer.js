import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Profile from "./profile";
import { userState } from "../../states";

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
} = userState.selectors;

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

  const isAFriend =
    navigation.state.params && navigation.state.params.isAFriend;

  const friendId = navigation.state.params && navigation.state.params.friendId;
  return {
    ...stateProps,
    ...ownProps,
    goToMap: () => {
      navigation.navigate(routeKeys.FriendsMap);
    },
    isAFriend,
    friendId
  };
};

export default connect(mapStateToProps, null, mergeProps)(Profile);
