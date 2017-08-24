import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../../../config";
import EmailConfirmation from "./emailConfirmation";
import { registrationState } from "../../../../states";

const { getEmailAddress, getPhoneNumber } = registrationState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    email: getEmailAddress,
    phoneNumber: getPhoneNumber
  });
};

const mapDispatchToProps = dispatch => {
  return {
    goNextPage: navigation => navigation.navigate(routeKeys.Login)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);
