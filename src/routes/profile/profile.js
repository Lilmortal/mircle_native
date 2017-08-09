import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Button from "../../components/button";
import ProfilePicture from "../../components/profilePicture";
import { images, routeKeys } from "../../config";
import Biography from "./biography";
import styles from "./styles";

const checkIfTileIsInEdge = (id, size) => {
  const style = {};

  if (id % 3 === 0) {
    style.borderRightWidth = 0;
  }
  if (size.length - id < 3) {
    style.borderBottomWidth = 0;
  }
  return style;
};

const Profile = ({
  navigation,
  emailAddress,
  firstName,
  surname,
  gender,
  phoneNumber,
  birthDate,
  occupation,
  profilePicture,
  createdOn,
  lastLoggedIn
}) => {
  const data = [
    { id: 1, label: "Email address", value: emailAddress },
    { id: 2, label: "Email address", value: emailAddress },
    { id: 3, label: "Email address", value: emailAddress },
    { id: 4, label: "Email address", value: emailAddress },
    { id: 5, label: "Email address", value: emailAddress },
    { id: 6, label: "Email address", value: emailAddress },
    { id: 7, label: "Email address", value: emailAddress },
    { id: 8, label: "Email address", value: emailAddress },
    { id: 9, label: "Email address", value: emailAddress },
    { id: 10, label: "Email address", value: emailAddress },
    { id: 11, label: "Email address", value: emailAddress }
  ];
  return (
    <View style={styles.profile}>
      <FlatList
        style={styles.biographies}
        numColumns={3}
        ListHeaderComponent={
          <Image
            source={images.profileBackground}
            style={styles.profilePictureBackground}
          >
            <View style={styles.headerDescription}>
              <ProfilePicture source={images.anonymous} size={250} />
              <Text style={styles.name}>
                {firstName} {surname}
              </Text>
              <Text style={styles.email}>
                {emailAddress}
              </Text>
            </View>
            {navigation.state.params &&
              navigation.state.params.friend &&
              <TouchableHighlight
                onPress={() => navigation.navigate(routeKeys.FriendsMap)}
                style={styles.map}
              >
                <Icon name="map" size={25} />
              </TouchableHighlight>}
          </Image>
        }
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <Biography
            label={item.label}
            value={item.value}
            style={() => checkIfTileIsInEdge(item.id, data)}
          />}
      />
    </View>
  );
};

export default Profile;
