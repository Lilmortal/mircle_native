import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Logout from "./logout";

import { userState } from "../../states";

const { RESET_USER_STATE, UPDATE_IS_LOGGED_IN } = userState.actions;

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...ownProps,
    ...stateProps,
    logout: async () => {
      dispatch(RESET_USER_STATE());
      dispatch(UPDATE_IS_LOGGED_IN(false));
      await AsyncStorage.removeItem("token");
      navigation.navigate(routeKeys.Login);
    }
  };
};

export default connect(null, null, mergeProps)(Logout);
