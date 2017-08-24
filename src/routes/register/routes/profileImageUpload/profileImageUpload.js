import React, { Component } from "react";
import {
  View,
  Text,
  DeviceEventEmitter,
  CameraRoll,
  Alert
} from "react-native";

import ProfileImage from "../../../../components/profileImage";
import Button from "../../../../components/button";
import { TextInput } from "../../components";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const ProfileImageUpload = ({
  navigation,
  goNextPage,
  profileImage,
  getProfileImageFromCamera,
  getProfileImageFromGallery
}) =>
  <RegisterLayout
    title="Upload a photo of yourself"
    onPress={() => goNextPage(navigation)}
  >
    <View style={styles.uploadInstruction}>
      {profileImage.isDefault
        ? <Text style={styles.uploadInstructionText}>
            Upload a photo of yourself, or you can do it later.
          </Text>
        : <ProfileImage source={profileImage} size={200} />}
    </View>

    <View style={styles.uploadButtons}>
      <Button onPress={getProfileImageFromCamera} style={styles.uploadButton}>
        <Text style={styles.buttonText}>Take a photo of yourself</Text>
      </Button>
      <Button onPress={getProfileImageFromGallery} style={styles.uploadButton}>
        <Text style={styles.buttonText}>Check your gallery</Text>
      </Button>
    </View>
  </RegisterLayout>;

export default ProfileImageUpload;
