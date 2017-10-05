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
    profileImage: getProfileImage,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { navigation } = ownProps;
  return {
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
    goNextPage: async () =>
      navigation.navigate(routeKeys.RegisterAccountSummary),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImageUpload);
