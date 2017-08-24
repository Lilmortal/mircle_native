import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Login from "./login";
import { getUserByEmailAddress } from "../../api";
import { registerDetailsState, userDetailsState } from "../../states";

const { RESET_REGISTER_DETAILS } = registerDetailsState.actions;

const mapDispatchToProps = dispatch => {
  return {
    resetRegisterDetails: () => {
      dispatch(RESET_REGISTER_DETAILS());
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
