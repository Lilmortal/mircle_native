import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { routeKeys } from "../../../../config";
import EmailConfirmation from "./emailConfirmation";
import { registerDetailsState } from "../../../../states";

const { getEmailAddress, getPhoneNumber } = registerDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    email: getEmailAddress,
    phoneNumber: getPhoneNumber
  });
};

const mapDispatchToProps = dispatch => {
  return {
    goNextPage: navigation =>
      navigation.navigate(routeKeys.Login)
  };
};
export default connect(mapStateToProps)(EmailConfirmation);
