import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DrawerPanel from "./drawerPanel";
import userDetailsState from "../../../../states/userDetails";

const {
  getProfilePicture,
  getFirstName,
  getSurname,
  getEmailAddress
} = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    profilePicture: getProfilePicture,
    firstName: getFirstName,
    surname: getSurname,
    emailAddress: getEmailAddress
  });
};

export default connect(mapStateToProps)(DrawerPanel);
