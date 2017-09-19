import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { camera } from "../../../../libs";
import { routeKeys } from "../../../../config";
import ProfileImageUpload from "./profileImageUpload";
import { registrationState } from "../../../../states";

const { UPDATE_PROFILE_IMAGE } = registrationState.actions;
const { getProfileImage } = registrationState.selectors;

const { getProfileImageFromMedium } = camera;

const mapStateToProps = () => {
  return createStructuredSelector({
    profileImage: getProfileImage
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { navigation } = ownProps;
  return {
    ...stateProps,
    ...ownProps,
    getProfileImageFromMedium: async medium => {
      try {
        const profileImage = await getProfileImageFromMedium(medium);
        dispatch(UPDATE_PROFILE_IMAGE(profileImage));
      } catch (err) {
        if (err.name !== "UserCancelledError") {
          Alert.alert(
            "There is an error attempting to update your profile image",
            err
          );
        }
      }
    },
    goNextPage: () => navigation.navigate(routeKeys.RegisterAccountSummary)
  };
};

export default connect(mapStateToProps, null, mergeProps)(ProfileImageUpload);
