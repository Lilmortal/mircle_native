import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { mapGenderValueToLabel } from "../../../libs";
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
  const {
    gender,
    phoneNumber,
    birthDate,
    occupation,
    createdOn,
    lastLoggedIn
  } = stateProps;

  const { navigation } = ownProps;

  const data = [
    {
      id: 1,
      label: "Gender",
      value: mapGenderValueToLabel(gender)
    },
    {
      id: 2,
      label: "Phone Number",
      value: phoneNumber
    },
    {
      id: 3,
      label: "Birth Date",
      value: birthDate.toLocaleString()
    },
    {
      id: 4,
      label: "Occupation",
      value: occupation
    },
    {
      id: 5,
      label: "Created On",
      value: createdOn.toLocaleString()
    },
    {
      id: 6,
      label: "Last Logged In",
      value: lastLoggedIn.toLocaleString()
    }
  ];
  return {
    ...stateProps,
    ...ownProps,
    goToMap: () => {
      navigation.navigate(routeKeys.FriendsMap);
    },
    data,
    isAFriend: true
  };
};

export default connect(mapStateToProps, null, mergeProps)(Profile);
