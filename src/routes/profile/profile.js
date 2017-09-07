import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { validate } from "../../libs";
import { NUM_OF_COLUMNS } from "./constants";
import { images } from "../../config";
import Modal from "../../components/modal";
import Picker from "../../components/picker";
import DatePicker from "../../components/datePicker";
import TextInput from "../../components/textInput";
import Button from "../../components/button";
import ProfileImage from "../../components/profileImage";
import Biography from "./components/biography";
import styles from "./styles";

class Profile extends Component {
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
                <Text style={styles.name}>
                  {firstName} {surname}
                </Text>
                <Text style={styles.email}>
                  {emailAddress}
                </Text>
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
              <Text style={styles.buttonText}>Take a photo of yourself</Text>
            </Button>
            <Button
              onPress={async () => {
                await getProfileImageFromMedium("gallery");
                this.setProfilePictureModal(false);
              }}
              style={styles.uploadButton}
            >
              <Text style={styles.buttonText}>Get it from your gallery</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Profile;
