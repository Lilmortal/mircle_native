import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import DrawerPanel from "./drawerPanel";
import { userDetailsState } from "../../../../states";

const {
  getProfileImage,
  getFirstName,
  getSurname,
  getEmailAddress
} = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    profileImage: getProfileImage,
    firstName: getFirstName,
    surname: getSurname,
    emailAddress: getEmailAddress
  });
};

export default connect(mapStateToProps)(DrawerPanel);
