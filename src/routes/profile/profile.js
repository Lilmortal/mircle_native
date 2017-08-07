import React from "react";
import { View, Text, Image } from "react-native";

import Button from "../../components/button";
import ProfilePicture from "../../components/profilePicture";
import { images, routeKeys } from "../../config";
import styles from "./styles";

const Profile = ({ navigation }) =>
  <View style={styles.profile}>
    <Image source={images.profileBackground} style={styles.profilePicture}>
      <ProfilePicture source={images.anonymous} size={250} />

      <View style={styles.profileName}>
        <Text style={styles.profileNameText}>Will Smith</Text>
        <Text style={styles.email}>willsmith@gmail.com</Text>
      </View>
    </Image>

    <View style={styles.biography}>
      <View style={styles.biographyList}>
        <Text style={styles.biographyListText}>34</Text>
        <Text style={styles.biographyDescription}>age</Text>
      </View>
      <View style={styles.biographyList}>
        <Text style={styles.biographyListText}>Actor</Text>
        <Text style={styles.biographyDescription}>occupation</Text>
      </View>
      <View style={styles.biographyList}>
        <Text style={styles.biographyListText}>Hollywood</Text>
        <Text style={styles.biographyDescription}>company</Text>
      </View>
    </View>

    {navigation.state.params &&
      navigation.state.params.isAFriend &&
      <View style={styles.map}>
        <Button
          onPress={() => navigation.navigate(routeKeys.FriendsMap)}
          style={styles.buttonMap}
        >
          <Text>Where have you two meet before?</Text>
        </Button>
      </View>}
  </View>;

export default Profile;
