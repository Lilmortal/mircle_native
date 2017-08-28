import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { routeKeys } from "../../config";
import Login from "./login";
import { getUserByEmailAddress } from "../../api";
import { registrationState, userState } from "../../states";

const { RESET_REGISTER_DETAILS } = registrationState.actions;
const {
  UPDATE_EMAIL_ADDRESS,
  UPDATE_FIRST_NAME,
  UPDATE_SURNAME,
  UPDATE_GENDER,
  UPDATE_PHONE_NUMBER,
  UPDATE_BIRTH_DATE,
  UPDATE_OCCUPATION,
  UPDATE_PROFILE_IMAGE,
  UPDATE_CREATED_ON,
  UPDATE_LAST_LOGGED_IN,
  UPDATE_IS_LOGGED_IN
} = userState.actions;

const mapDispatchToProps = dispatch => {
  return {
    resetRegisterDetails: () => {
      dispatch(RESET_REGISTER_DETAILS());
    },
    goToRegistrationPage: navigation => {
      navigation.navigate(routeKeys.RegisterAccountCreation);
    },
    goToForgottenPasswordPage: navigation => {
      navigation.navigate(routeKeys.ForgotPassword);
    },
    getUserByEmailAddress: async (emailAddress, password, navigation) => {
      try {
        const user = await getUserByEmailAddress(emailAddress, password);
        console.log(user.profileImage);
        dispatch(UPDATE_EMAIL_ADDRESS(user.emailAddress));
        dispatch(UPDATE_FIRST_NAME(user.firstName));
        dispatch(UPDATE_SURNAME(user.surname));
        dispatch(UPDATE_GENDER(user.gender));
        dispatch(UPDATE_PHONE_NUMBER(user.phoneNumber));
        dispatch(UPDATE_BIRTH_DATE(moment.utc(user.birthDate).toDate()));
        dispatch(UPDATE_OCCUPATION(user.occupation));
        dispatch(UPDATE_PROFILE_IMAGE(user.profileImage));
        dispatch(UPDATE_CREATED_ON(moment.utc(user.createdOn).toDate()));
        dispatch(UPDATE_LAST_LOGGED_IN(moment.utc(user.lastLoggedIn).toDate()));
        dispatch(UPDATE_IS_LOGGED_IN(true));
        navigation.navigate(routeKeys.QrCode);
      } catch (err) {
        console.error(err);
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
