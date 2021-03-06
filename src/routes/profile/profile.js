import React, { Component } from "react";
import { View, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { validate } from "../../libs";
import { NUM_OF_COLUMNS } from "./constants";
import { images } from "../../config";
import {
  TitleText,
  TitleDescriptionText,
  RegularText,
  SmallText
} from "@jacktan/mircle_native_components/text";
import Modal from "@jacktan/mircle_native_components/modal";
import Picker from "@jacktan/mircle_native_components/picker";
import DatePicker from "@jacktan/mircle_native_components/datePicker";
import TextInput from "@jacktan/mircle_native_components/textInput";
import Button from "@jacktan/mircle_native_components/button";
import ProfileImage from "@jacktan/mircle_native_components/profileImage";
import Biography from "./components/biography";
import styles from "./styles";

class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    if (navigation.state.params && navigation.state.params.user) {
      return { title: `${navigation.state.params.user}` };
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      isProfilePictureModalOpen: false
    };
  }

  setProfilePictureModal = isProfilePictureModalOpen => {
    this.setState({
      isProfilePictureModalOpen
    });
  };

  checkIfTileIsInEdge = (id, size) => {
    const style = {};

    if (id % NUM_OF_COLUMNS === 0) {
      style.borderRightWidth = 0;
    }
    if (size.length - id < NUM_OF_COLUMNS) {
      style.borderBottomWidth = 0;
    }
    return style;
  };

  render() {
    const {
      emailAddress,
      firstName,
      surname,
      profileImage,
      goToMap,
      isAFriend,
      data,
      getProfileImageFromMedium
    } = this.props;
    return (
      <View style={styles.profile}>
        <FlatList
          style={styles.biographies}
          numColumns={NUM_OF_COLUMNS}
          ListHeaderComponent={
            <Image
              source={images.profileBackground}
              style={styles.profileImageBackground}
            >
              <View style={styles.headerDescription}>
                <TouchableOpacity
                  onPress={() =>
                    !isAFriend && this.setProfilePictureModal(true)}
                >
                  <View>
                    <ProfileImage source={profileImage} size={250} />
                  </View>
                </TouchableOpacity>
                <View style={styles.headerUserInfo}>
                  <TitleText color="white" bold>
                    {firstName} {surname}
                  </TitleText>
                  <RegularText>
                    {emailAddress}
                  </RegularText>
                </View>
              </View>
              {isAFriend &&
                <View style={styles.map}>
                  <TouchableOpacity onPress={goToMap}>
                    <Icon name="map" size={25} />
                  </TouchableOpacity>
                </View>}
            </Image>
          }
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Biography
              label={item.label}
              value={item.value}
              InputComponent={item.InputComponent}
              disabled={item.disabled}
              selectable={!isAFriend}
              style={() => this.checkIfTileIsInEdge(item.id, data)}
            />}
        />

        <Modal
          visible={this.state.isProfilePictureModalOpen}
          onRequestClose={() => this.setProfilePictureModal(false)}
          Icon={<Icon name="user" size={25} />}
          title="Update Profile Picture"
        >
          <View>
            <Button
              onPress={async () => {
                await getProfileImageFromMedium("camera");
                this.setProfilePictureModal(false);
              }}
              style={styles.uploadButton}
            >
              <RegularText style={styles.buttonText}>
                Take a photo of yourself
              </RegularText>
            </Button>
            <Button
              onPress={async () => {
                await getProfileImageFromMedium("gallery");
                this.setProfilePictureModal(false);
              }}
              style={styles.uploadButton}
            >
              <RegularText style={styles.buttonText}>
                Get it from your gallery
              </RegularText>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Profile;
