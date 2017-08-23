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

const openCamera = () => {
  return ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true
  })
    .then(response => {
      const image = {
        uri: response.path,
        isDefault: false
      };
      return Promise.resolve(image);
    })
    .catch(err => {
      Alert.alert("There seems to be an error uploading your profile picture.");
      console.error(err);
    });
};

const openGallery = () => {
  return ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  })
    .then(response => {
      const image = {
        uri: response.path,
        isDefault: false
      };
      return Promise.resolve(image);
    })
    .catch(err => {
      Alert.alert("There seems to be an error uploading your profile picture.");
      console.error(err);
    });
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
        onPress={() => openCamera().then(image => updateProfileImage(image))}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Take a photo of yourself</Text>
      </Button>
      <Button
        onPress={() => openGallery().then(image => updateProfileImage(image))}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Check your gallery</Text>
      </Button>
    </View>
  </RegisterLayout>;

export default ProfileImageUpload;
