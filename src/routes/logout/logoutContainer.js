import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../config";
import Logout from "./logout";

import { userState } from "../../states";

const { RESET_USER_STATE, UPDATE_IS_LOGGED_IN } = userState.actions;

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;

  return {
    logout: async () => {
      dispatch(RESET_USER_STATE());
      dispatch(UPDATE_IS_LOGGED_IN(false));
      await AsyncStorage.removeItem("token");
      navigation.navigate(routeKeys.Login);
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
