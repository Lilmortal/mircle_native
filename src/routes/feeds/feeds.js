// @flow

import React, { Component } from "react";
import { View, Text, Image, ListView } from "react-native";

import ProfilePicture from "../../components/profilePicture";
import { images } from "../../config";
import styles from "./styles";

export default class Feeds extends Component {
  state: {
    dataSource: Object
  };

  constructor(props: {}) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          profilePicture: images.anonymous,
          profileName: "Will Smith",
          date: "9 June, 2017",
          profileDescription: "Is now connected to you!"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          date: "7 June, 2017",
          profileDescription: "Changed his facebook link to facebook.com/fish"
        }
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData =>
            <View style={styles.feed}>
              <ProfilePicture source={rowData.profilePicture} />
              <View style={styles.profileContainer}>
                <Text style={styles.profileName}>
                  {rowData.profileName}
                </Text>
                <Text style={styles.date}>
                  {rowData.date}
                </Text>
                <Text style={styles.profileDescription}>
                  {rowData.profileDescription}
                </Text>
              </View>
            </View>}
        />
        {/* <View style={styles.noFeedMessage}>
      <Text>Start adding new friends to populate your feeds!</Text>
    </View>*/}
      </View>
    );
  }
}
