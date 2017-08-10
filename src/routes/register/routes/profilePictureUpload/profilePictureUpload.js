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
import ProfilePicture from "../../../../components/profilePicture";
import Button from "../../../../components/button";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const setBase64Image = profilePicture => {
  const base64Image = `data:${profilePicture.mime};base64,${profilePicture.data}`;

  profilePicture.image = { uri: base64Image };
  return profilePicture;
};

const openCamera = () => {
  return ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true
  })
    .then(image => {
      image = setBase64Image(image);
      return new Promise(resolve => resolve(image));
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
      return new Promise(resolve => resolve(image));
    })
    .catch(err => {
      Alert.alert("There seems to be an error uploading your profile picture.");
      console.error(err);
    });
};

const RegisterAccountCreation = ({
  navigation,
  profilePicture,
  updateProfilePicture
}) =>
  <RegisterLayout
    title="Upload a photo of yourself"
    onPress={() => navigation.navigate(routeKeys.RegisterAccountSummary)}
  >
    <View style={styles.uploadInstruction}>
      {profilePicture.default
        ? <Text style={styles.uploadInstructionText}>
            Upload a photo of yourself, or you can do it later.
          </Text>
        : <ProfilePicture source={profilePicture.image} size={200} />}
    </View>

    <View style={styles.uploadButtons}>
      <Button
        onPress={() => openCamera().then(image => updateProfilePicture(image))}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Take a photo of yourself</Text>
      </Button>
      <Button
        onPress={() => openGallery().then(image => updateProfilePicture(image))}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Check your gallery</Text>
      </Button>
    </View>
  </RegisterLayout>;

export default RegisterAccountCreation;
