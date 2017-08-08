import React, { Component } from "react";
import { View, Text, DeviceEventEmitter, CameraRoll } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

import { routeKeys } from "../../../../config";
import Button from "../../../../components/button";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const openCamera = uploadProfilePicture => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    uploadProfilePicture(image);
  });
};

const openGallery = uploadProfilePicture => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    uploadProfilePicture(image);
  });
};

const RegisterAccountCreation = ({
  navigation,
  profilePicture,
  uploadProfilePicture
}) =>
  <RegisterLayout
    title="UPLOAD A PHOTO OF YOURSELF"
    onPress={() => navigation.navigate(routeKeys.RegisterAccountSummary)}
  >
    <View style={styles.uploadInstruction}>
      <Text style={styles.uploadInstructionText}>
        Upload a photo of yourself, or you can do it later.
      </Text>
    </View>

    <View style={styles.uploadButtons}>
      <Button
        onPress={() => openCamera(uploadProfilePicture)}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Take a photo of yourself</Text>
      </Button>
      <Button
        onPress={() => openGallery(uploadProfilePicture)}
        style={styles.uploadButton}
      >
        <Text style={styles.buttonText}>Check your gallery</Text>
      </Button>
    </View>
  </RegisterLayout>;

export default RegisterAccountCreation;
