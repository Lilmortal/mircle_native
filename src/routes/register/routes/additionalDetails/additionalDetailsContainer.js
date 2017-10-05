import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../../../config";
import AdditionalDetails from "./additionalDetails";
import { registrationState } from "../../../../states";

const {
  UPDATE_FIRST_NAME,
  UPDATE_SURNAME,
  UPDATE_GENDER,
  UPDATE_PHONE_NUMBER,
  UPDATE_BIRTH_DATE,
  UPDATE_OCCUPATION,
  UPDATE_PROFILE_IMAGE,
} = registrationState.actions;

const {
  getFirstName,
  getSurname,
  getBirthDate,
  getGender,
  getPhoneNumber,
  getOccupation,
} = registrationState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    firstName: getFirstName,
    surname: getSurname,
    birthDate: getBirthDate,
    gender: getGender,
    phoneNumber: getPhoneNumber,
    occupation: getOccupation,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;

  return {
    registerFirstName: firstName => {
      dispatch(UPDATE_FIRST_NAME(firstName));
    },
    registerSurname: surname => {
      dispatch(UPDATE_SURNAME(surname));
    },
    registerGender: gender => {
      dispatch(UPDATE_GENDER(gender));
    },
    registerPhoneNumber: phoneNumber => {
      dispatch(UPDATE_PHONE_NUMBER(phoneNumber));
    },
    registerBirthDate: birthDate => {
      dispatch(UPDATE_BIRTH_DATE(birthDate));
    },
    registerOccupation: occupation => {
      dispatch(UPDATE_OCCUPATION(occupation));
    },
    registerProfileImage: profileImage => {
      dispatch(UPDATE_PROFILE_IMAGE(profileImage));
    },
    goToNextPage: validateForm =>
      validateForm
        ? navigation.navigate(routeKeys.RegisterProfileImageUpload)
        : Alert.alert("Please enter the correct details."),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalDetails);
