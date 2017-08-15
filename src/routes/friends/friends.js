import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";

import Feed from "../../components/feed";
import ProfileImage from "../../components/profileImage";

import { images, routeKeys } from "../../config";
import styles from "./styles";

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 0,
          profileImage: images.anonymous,
          profileName: "Will Smith",
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          id: 1,
          profileImage: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs",
          addedTime: "6 June, 2017"
        },
        {
          id: 2,
          profileImage: images.anonymous,
          profileName: "Will Smith",
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          id: 3,
          profileImage: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs",
          addedTime: "6 June, 2017"
        },
        {
          id: 4,
          profileImage: images.anonymous,
          profileName: "Will Smith",
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          id: 5,
          profileImage: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs secondary college",
          addedTime: "6 June, 2017"
        }
      ]
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noFriendsMessage}>
              <Text>
                You don&#39;t have any friends on Mircle at the moment, start
                adding new friends now!
              </Text>
            </View>
          }
          renderItem={({ item }) =>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate(routeKeys.FriendsProfile, {
                  friend: true
                })}
            >
              <View>
                <Feed key={item.id} isSelectable>
                  <ProfileImage source={item.profileImage} />
                  <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>
                      {item.profileName}
                    </Text>
                    <View style={styles.profileDescription}>
                      <Text>
                        Worked as a {item.occupation} at {item.company}
                      </Text>
                      <Text>
                        Added each other on {item.addedTime}
                      </Text>
                    </View>
                  </View>
                </Feed>
              </View>
            </TouchableHighlight>}
        />
      </View>
    );
  }
}
