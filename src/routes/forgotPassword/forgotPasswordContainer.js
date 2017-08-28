import { Alert } from "react-native";
import { connect } from "react-redux";

import { routeKeys } from "../../config";
import ForgotPassword from "./forgotPassword";

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;

  return {
    ...ownProps,
    goToLoginPage: () => {
      Alert.alert(
        "willsmith@gmail.com has been sent an email, have a look at it to reset your password."
      );
      navigation.navigate(routeKeys.Login);
    },
    cancelPage: () => {
      navigation.navigate(routeKeys.Login);
    }
  };
};

export default connect(null, null, mergeProps)(ForgotPassword);
