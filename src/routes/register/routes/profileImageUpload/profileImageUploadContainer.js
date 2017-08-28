import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ImagePicker from "react-native-image-crop-picker";

import { routeKeys } from "../../../../config";
import ProfileImageUpload from "./profileImageUpload";
import { registrationState } from "../../../../states";

const { UPDATE_PROFILE_IMAGE } = registrationState.actions;
const { getProfileImage } = registrationState.selectors;

const CAMERA_WIDTH = 300;
const CAMERA_HEIGHT = 400;

const createProfileImage = image => {
  const profileImage = {
    uri: image.path,
    type: image.mime,
    name: image.path.substring(image.path.lastIndexOf("/") + 1),
    isDefault: false
  };
  return Promise.resolve(profileImage);
};

const getImageFromMedium = async medium => {
  let image;
  if (medium === "camera") {
    image = await ImagePicker.openCamera({
      width: CAMERA_WIDTH,
      height: CAMERA_HEIGHT,
      cropping: true
    });
  } else if (medium === "gallery") {
    image = await ImagePicker.openPicker({
      width: CAMERA_WIDTH,
      height: CAMERA_HEIGHT,
      cropping: true
    });
  } else {
    throw new Error("Invalid medium.");
  }
  return image;
};

const getProfileImageFromMedium = async medium => {
  const image = await getImageFromMedium(medium);
  const profileImage = await createProfileImage(image);
  return profileImage;
};

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
        Alert.alert(err);
        console.error(err);
      }
    },
    goNextPage: () => navigation.navigate(routeKeys.RegisterAccountSummary)
  };
};

export default connect(mapStateToProps, null, mergeProps)(ProfileImageUpload);
