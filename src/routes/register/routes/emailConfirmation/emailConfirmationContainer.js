import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import EmailConfirmation from "./emailConfirmation";
import userDetailsState from "../../../../states/userDetails";

const { getEmailAddress, getPhoneNumber } = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    email: getEmailAddress,
    phoneNumber: getPhoneNumber
  });
};

export default connect(mapStateToProps)(EmailConfirmation);
