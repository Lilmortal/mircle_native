import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AdditionalDetails from "./additionalDetails";
import userDetailsState from "../../../../states/userDetails";

const {
  UPDATE_FIRST_NAME,
  UPDATE_SURNAME,
  UPDATE_GENDER,
  UPDATE_PHONE_NUMBER,
  UPDATE_BIRTH_DATE,
  UPDATE_OCCUPATION,
  UPDATE_PROFILE_IMAGE
} = userDetailsState.actions;

const { getBirthDate, getGender } = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    birthDate: getBirthDate,
    gender: getGender
  });
};

const mapDispatchToProps = dispatch => {
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalDetails);
