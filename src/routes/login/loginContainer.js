import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import moment from "moment";

import { routeKeys } from "../../config";
import Login from "./login";
import { getUserByEmailAddress } from "../../api";
import { registrationState, userState } from "../../states";

const { RESET_REGISTER_DETAILS } = registrationState.actions;
const { POPULATE_USER_STATE } = userState.actions;

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...ownProps,
    resetRegisterDetails: () => {
      dispatch(RESET_REGISTER_DETAILS());
    },
    goToRegistrationPage: () => {
      navigation.navigate(routeKeys.RegisterAccountCreation);
    },
    goToForgottenPasswordPage: () => {
      navigation.navigate(routeKeys.ForgotPassword);
    },
    getUserByEmailAddress: async (emailAddress, password) => {
      try {
        const user = await getUserByEmailAddress(emailAddress, password);
        dispatch(POPULATE_USER_STATE(user));
        navigation.navigate(routeKeys.QrCode);
      } catch (err) {
        console.error(err);
      }
    }
  };
};

export default connect(null, null, mergeProps)(Login);
