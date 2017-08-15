import React, { Component } from "react";
import {
  View,
  Text,
  DeviceEventEmitter,
  CameraRoll,
  Alert
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { RNS3 } from "react-native-aws3";

import { images, routeKeys } from "../../../../config";
import ProfileImage from "../../../../components/profileImage";
import Button from "../../../../components/button";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const setBase64Image = profileImage => {
  const file = {
    uri: profileImage.path,
    name: profileImage.path.substring(
      profileImage.path.lastIndexOf("/"),
      profileImage.path.lastIndexOf(".")
    ),
    type: profileImage.mime
  };

  const options = {
    bucket:
    region:
    accessKey:
    secretKey:
  }
  
  RNS3.put(file, options).then(response => {
    if (response.status !== 201)
    throw new Error("Failed to upload image to S3");
  console.log(response.body);
  });
  const base64Image = `data:${profileImage.mime};base64,${profileImage.data}`;

  profileImage.default = false;
  profileImage.image = { uri: base64Image };
  return profileImage;
};

const openCamera = () => {
  return ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true
  })
    .then(profileImage => {
      profileImage = setBase64Image(profileImage);
      return Promise.resolve(profileImage);
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
    cropping: true,
    includeBase64: true
  })
    .then(image => {
      image = setBase64Image(image);
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
      {profileImage.default
        ? <Text style={styles.uploadInstructionText}>
            Upload a photo of yourself, or you can do it later.
          </Text>
        : <ProfileImage source={profileImage.image} size={200} />}
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
