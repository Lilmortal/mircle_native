import { connect } from "react-redux";

import AccountCreation from "./accountCreation";
import userDetailsState from "../../../../states/userDetails";

const { UPDATE_EMAIL_ADDRESS, UPDATE_PASSWORD } = userDetailsState.actions;

const mapDispatchToProps = dispatch => {
  return {
    registerEmailAddress: emailAddress => {
      dispatch(UPDATE_EMAIL_ADDRESS(emailAddress));
    },
    registerPassword: password => {
      dispatch(UPDATE_PASSWORD(password));
    }
  };
};

export default connect(null, mapDispatchToProps)(AccountCreation);
