import React from "react";
import { View, Image, Text, FlatList } from "react-native";

import Icon from "../../components/icon";
import Button from "../../components/button";
import images from "../../config/images";
import styles from "./styles";

const Profile = () =>
  <View>
    <Image source={images.anonymous} style={styles.profilePicture} />
    <View style={styles.profileName}>
      <Text style={styles.profileNameText}>Will Smith</Text>
    </View>

    <FlatList
      data={[
        {
          email: "willsmith@gmail.com",
          age: "34",
          occupation: "Actor",
          company: "Hollywood"
        }
      ]}
      renderItem={({ item }) =>
        <View style={styles.biography}>
          <View style={styles.list}>
            <Icon source={images.emailIcon} />
            <Text style={styles.listText}>
              {item.email}
            </Text>
          </View>
          <View style={styles.list}>
            <Icon source={images.emailIcon} />
            <Text style={styles.listText}>
              {item.age}
            </Text>
          </View>
          <View style={styles.list}>
            <Icon source={images.emailIcon} />
            <Text style={styles.listText}>
              {item.occupation}
            </Text>
          </View>
          <View style={styles.list}>
            <Icon source={images.emailIcon} />
            <Text style={styles.listText}>
              {item.company}
            </Text>
          </View>
        </View>}
    />
  </View>;

export default Profile;
