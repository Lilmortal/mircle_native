import { connect } from "react-redux";

import AccountCreation from "./accountCreation";
import { registrationState } from "../../../../states";
import { routeKeys } from "../../../../config";

const { UPDATE_EMAIL_ADDRESS, UPDATE_PASSWORD } = registrationState.actions;

const mapDispatchToProps = dispatch => {
  return {
    registerEmailAddress: emailAddress => {
      dispatch(UPDATE_EMAIL_ADDRESS(emailAddress));
    },
    registerPassword: password => {
      dispatch(UPDATE_PASSWORD(password));
    },
    goNextPage: navigation =>
      navigation.navigate(routeKeys.RegisterAdditionalDetails)
  };
};

export default connect(null, mapDispatchToProps)(AccountCreation);
