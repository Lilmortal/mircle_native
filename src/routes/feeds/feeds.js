import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";

import Feed from "../../components/feed";
import ProfilePicture from "../../components/profilePicture";
import { images } from "../../config";
import styles from "./styles";

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: 0,
          profilePicture: images.anonymous,
          profileName: "Will Smith",
          date: "9 June, 2017",
          profileDescription: "Is now connected to you!"
        },
        {
          id: 1,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          id: 2,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          id: 3,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          id: 4,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          id: 5,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          id: 6,
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Feed key={item.id}>
              <ProfilePicture source={item.profilePicture} />
              <View style={styles.profileContainer}>
                <Text style={styles.profileName}>
                  {item.profileName}
                </Text>
                <Text style={styles.date}>
                  {item.date}
                </Text>
                <Text style={styles.profileDescription}>
                  {item.profileDescription}
                </Text>
              </View>
            </Feed>}
        />
        {/* <View style={styles.noFeedMessage}>
      <Text>Start adding new friends to populate your feeds!</Text>
    </View>*/}
      </View>
    );
  }
}
