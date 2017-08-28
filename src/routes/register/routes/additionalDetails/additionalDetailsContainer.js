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
  UPDATE_PROFILE_IMAGE
} = registrationState.actions;

const { getBirthDate, getGender } = registrationState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    birthDate: getBirthDate,
    gender: getGender
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...stateProps,
    ...ownProps,
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
    goNextPage: () => navigation.navigate(routeKeys.RegisterProfileImageUpload)
  };
};

export default connect(mapStateToProps, null, mergeProps)(AdditionalDetails);
