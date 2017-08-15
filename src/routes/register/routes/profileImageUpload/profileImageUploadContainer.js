import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProfileImageUpload from "./profileImageUpload";
import userDetailsState from "../../../../states/userDetails";

const { UPDATE_PROFILE_IMAGE } = userDetailsState.actions;
const { getProfileImage } = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    profileImage: getProfileImage
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfileImage: profileImage => {
      dispatch(UPDATE_PROFILE_IMAGE(profileImage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImageUpload);
