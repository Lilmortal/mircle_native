import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { mapGenderValueToLabel } from "../../libs";
import Button from "../../components/button";
import ProfileImage from "../../components/profileImage";
import { images, routeKeys } from "../../config";
import Biography from "./biography";
import styles from "./styles";

export const NUM_OF_COLUMNS = 2;

const checkIfTileIsInEdge = (id, size) => {
  const style = {};

  if (id % NUM_OF_COLUMNS === 0) {
    style.borderRightWidth = 0;
  }
  if (size.length - id < NUM_OF_COLUMNS) {
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
  profileImage,
  createdOn,
  lastLoggedIn
}) => {
  const data = [
    { id: 1, label: "Gender", value: mapGenderValueToLabel(gender) },
    { id: 2, label: "Phone Number", value: phoneNumber },
    { id: 3, label: "Birth Date", value: birthDate.toLocaleString() },
    { id: 4, label: "Occupation", value: occupation },
    { id: 5, label: "Created On", value: createdOn.toLocaleString() },
    { id: 6, label: "Last Logged In", value: lastLoggedIn.toLocaleString() }
  ];
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
              <ProfileImage source={images.anonymous} size={250} />
              <Text style={styles.name}>
                {firstName} {surname}
              </Text>
              <Text style={styles.email}>
                {emailAddress}
              </Text>
            </View>
            {navigation.state.params &&
              navigation.state.params.friend &&
              <View style={styles.map}>
                <TouchableHighlight
                  onPress={() => navigation.navigate(routeKeys.FriendsMap)}
                >
                  <Icon name="map" size={25} />
                </TouchableHighlight>
              </View>}
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
