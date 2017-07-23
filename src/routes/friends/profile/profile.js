import React from "react";
import { View, Text, Image } from "react-native";

import images from "../../../config/images";
import styles from "./styles";

const Profile = () =>
  <View style={styles.profile}>
    <View style={styles.mainDescription}>
      <Image source={images.anonymous} style={styles.profilePicture} />
      <View style={styles.profileDescription}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.profileDetail}>Age: 32</Text>
        <Text style={styles.profileDetail}>Work: Actor</Text>
        <Text style={styles.profileDetail}>Occupation: Hollywood</Text>
      </View>
    </View>
    <View style={[styles.link, { marginTop: 20, borderTopWidth: 1 }]}>
      <Image source={images.facebookLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>facebook.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.twitterLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>twitter.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.facebookLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>facebook.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.twitterLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>twitter.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.facebookLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>facebook.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.twitterLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>twitter.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.facebookLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>facebook.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.twitterLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>twitter.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.facebookLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>facebook.com/willsmith</Text>
    </View>
    <View style={styles.link}>
      <Image source={images.twitterLogo} style={styles.logo} />
      <Text style={styles.linkDescription}>twitter.com/willsmith</Text>
    </View>
  </View>;

Profile.navigationOptions = {
  title: "Will Smith"
};

export default Profile;
