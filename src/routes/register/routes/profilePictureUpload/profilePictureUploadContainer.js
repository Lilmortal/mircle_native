import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ProfilePictureUpload from "./profilePictureUpload";
import userDetailsState from "../../../../states/userDetails";

const { UPDATE_PROFILE_PICTURE } = userDetailsState.actions;
const { getProfilePicture } = userDetailsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    profilePicture: getProfilePicture
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateProfilePicture: profilePicture => {
      dispatch(UPDATE_PROFILE_PICTURE(profilePicture));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProfilePictureUpload
);
