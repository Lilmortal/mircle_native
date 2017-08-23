import React, { Component } from "react";
import {
  View,
  Text,
  DeviceEventEmitter,
  CameraRoll,
  Alert
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";

import { images, routeKeys } from "../../../../config";
import ProfileImage from "../../../../components/profileImage";
import Button from "../../../../components/button";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

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

const getImage = async medium => {
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

const getProfileImage = async medium => {
  const image = await getImage(medium);
  const profileImage = await createProfileImage(image);
  return profileImage;
};

const ProfileImageUpload = ({ navigation, profileImage, updateProfileImage }) =>
  <RegisterLayout
    title="Upload a photo of yourself"
    onPress={() => navigation.navigate(routeKeys.RegisterAccountSummary)}
  >
    <View style={styles.uploadInstruction}>
      {profileImage.isDefault
        ? <Text style={styles.uploadInstructionText}>
            Upload a photo of yourself, or you can do it later.
          </Text>
        : <ProfileImage source={profileImage} size={200} />}
    </View>

    <View style={styles.uploadButtons}>
      <Button
        onPress={() => {
          try {
            getProfileImage("camera").then(profileImage =>
              updateProfileImage(profileImage)
            );
          } catch (err) {
            Alert.alert(
              "There seems to be an error uploading your profile picture from camera.\n" +
                err
            );
            console.error(err);
          }
        }}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Take a photo of yourself</Text>
      </Button>
      <Button
        onPress={() => {
          try {
            getProfileImage("gallery").then(profileImage =>
              updateProfileImage(profileImage)
            );
          } catch (err) {
            Alert.alert(
              "There seems to be an error uploading your profile picture from gallery.\n" +
                err
            );
            console.error(err);
          }
        }}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Check your gallery</Text>
      </Button>
    </View>
  </RegisterLayout>;

export default ProfileImageUpload;
