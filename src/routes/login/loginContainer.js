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
  connectToWebSocket
} from "../../api";
import { registrationState, userState } from "../../states";

const { RESET_REGISTER_DETAILS } = registrationState.actions;
const {
  POPULATE_USER_STATE,
  UPDATE_FEEDS,
  UPDATE_FRIENDS,
  UPDATE_IS_LOGGED_IN,
  UPDATE_STOMP_CLIENT
} = userState.actions;

const { isLoggedIn } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    isLoggedIn
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...ownProps,
    ...stateProps,
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

        const stompClient = await connectToWebSocket();
        dispatch(UPDATE_STOMP_CLIENT(stompClient));
        const feeds = await getFeeds(user.id);
        if (feeds && feeds.length) {
          dispatch(UPDATE_FEEDS(feeds));
        }

        navigation.navigate(routeKeys.QrCode);
      } catch (err) {
        Alert.alert("Attempting to login failed.", err.toString());
      }
    }
  };
};

export default connect(mapStateToProps, null, mergeProps)(Login);
