import React, { Component } from "react";
import { View, DeviceEventEmitter, CameraRoll, Alert } from "react-native";

import { RegularText, ButtonText } from "../../../../components/text";
import ProfileImage from "../../../../components/profileImage";
import Button from "../../../../components/button";
import RegisterLayout from "../../layout/registerLayout";
import styles from "./styles";

const ProfileImageUpload = ({
  goNextPage,
  profileImage,
  getProfileImageFromMedium
}) =>
  <RegisterLayout title="Upload a photo of yourself" onPress={goNextPage}>
    <View style={styles.uploadInstruction}>
      {profileImage.isDefault
        ? <RegularText>
            Upload a photo of yourself, or you can do it later.
          </RegularText>
        : <ProfileImage source={profileImage} size={200} />}
    </View>

    <View style={styles.uploadButtons}>
      <Button
        onPress={() => getProfileImageFromMedium("camera")}
        style={styles.uploadButton}
      >
        <ButtonText>Take a photo of yourself</ButtonText>
      </Button>
      <Button
        onPress={() => getProfileImageFromMedium("gallery")}
        style={styles.uploadButton}
      >
        <ButtonText>Check your gallery</ButtonText>
      </Button>
    </View>
  </RegisterLayout>;

export default ProfileImageUpload;
