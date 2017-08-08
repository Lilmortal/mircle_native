import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import EmailConfirmation from "./emailConfirmation";
import userDetailsState from "../../../../states/userDetails";

const { getEmailAddress } = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    email: getEmailAddress
  });
};

export default connect(mapStateToProps)(EmailConfirmation);
