import { Alert, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Login from "./login";
import {
  login,
  getFeeds,
  getListOfFriends,
  getUserByEmailAddress,
} from "../../api";
import { registrationState, userState } from "../../states";

const { RESET_REGISTER_DETAILS } = registrationState.actions;
const {
  POPULATE_USER_STATE,
  UPDATE_FEEDS,
  UPDATE_FRIENDS,
  UPDATE_IS_LOGGED_IN,
} = userState.actions;

const { isLoggedIn } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    isLoggedIn,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;

  return {
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
        const friends = await getListOfFriends(user.id);
        user.friends = friends;

        dispatch(POPULATE_USER_STATE(user));
        dispatch(UPDATE_IS_LOGGED_IN(true));

        const feeds = await getFeeds(user.id);
        if (feeds && feeds.length) {
          dispatch(UPDATE_FEEDS(feeds));
        }

        navigation.navigate(routeKeys.QrCode);
      } catch (err) {
        Alert.alert("Attempting to login failed.", err.toString());
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
