import { Alert, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Login from "./login";
import { login, getUserByEmailAddress } from "../../api";
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
    login: async (emailAddress, password) => {
      try {
        const token = await login(emailAddress, password);
        await AsyncStorage.setItem("token", token);
        const user = await getUserByEmailAddress(emailAddress);
        dispatch(POPULATE_USER_STATE(user));
        console.log(user);
        navigation.navigate(routeKeys.QrCode);
      } catch (err) {
        Alert.alert("Attempting to login failed.", err.toString());
      }
    }
  };
};

export default connect(null, null, mergeProps)(Login);
