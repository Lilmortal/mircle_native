import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import images from "../../../../config/images";
import styles from "./styles";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Will Smith"
  };

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={styles.profile}>
        <View style={styles.mainDescription}>
          <Image source={images.anonymous} style={styles.profilePicture} />
          <View style={styles.profileDescription}>
            <Text style={styles.title}>Profile</Text>
            <Text>
              You need to wait for his/her approval before you can view his/her
              profile
            </Text>
          </View>
        </View>
        <View style={styles.pendingDescription}>
          <Text>
            You need to wait for his/her approval before you can view his/her
            profile
          </Text>
        </View>
      </View>
    );
  }
}
