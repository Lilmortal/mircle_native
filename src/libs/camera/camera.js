import ImagePicker from "react-native-image-crop-picker";

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

export const getProfileImageFromMedium = async medium => {
  try {
    const image = await getImageFromMedium(medium);
    const profileImage = await createProfileImage(image);
  } catch (err) {
    console.log(err.message);
    if (err.message === "User cancelled image selection") {
      err.name = "UserCancelledError";
    }
    return Promise.reject(err);
  }
  return profileImage;
};
