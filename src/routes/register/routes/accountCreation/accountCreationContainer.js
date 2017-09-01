import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AccountCreation from "./accountCreation";
import { registrationState } from "../../../../states";
import { routeKeys } from "../../../../config";

const { UPDATE_EMAIL_ADDRESS, UPDATE_PASSWORD } = registrationState.actions;
const { getEmailAddress, getPassword } = registrationState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    emailAddress: getEmailAddress,
    password: getPassword
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;
  return {
    ...ownProps,
    ...stateProps,
    registerEmailAddress: emailAddress => {
      dispatch(UPDATE_EMAIL_ADDRESS(emailAddress));
    },
    registerPassword: password => {
      dispatch(UPDATE_PASSWORD(password));
    },
    goToNextPage: isValid =>
      isValid
        ? navigation.navigate(routeKeys.RegisterAdditionalDetails)
        : Alert.alert("Please enter the correct details.")
  };
};

export default connect(mapStateToProps, null, mergeProps)(AccountCreation);
