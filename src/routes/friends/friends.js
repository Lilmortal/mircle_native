import React, { Component } from "react";
import { View, Text, Image, ListView, TouchableHighlight } from "react-native";

import ProfilePicture from "../../components/profilePicture";
import Icon from "../../components/icon";

import { colors, images } from "../../config";
import styles from "./styles";

export default class Friends extends Component {
  static navigationOptions = {
    title: "Friends",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: colors.navigationHeader
    },
    drawerIcon: () => <Icon source={images.friendsIcon} />
  };

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
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs",
          addedTime: "6 June, 2017"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Will Smith",
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs",
          addedTime: "6 June, 2017"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Will Smith",
          occupation: "actor",
          company: "hollywood",
          addedTime: "9 June, 2017"
        },
        {
          profilePicture: images.anonymous,
          profileName: "Eren Jaegur",
          occupation: "student",
          company: "botany downs secondary college",
          addedTime: "6 June, 2017"
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
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate("FriendsProfile", {
                  isAFriend: true
                })}
            >
              <View style={styles.friends}>
                <ProfilePicture source={rowData.profilePicture} />
                <View style={styles.profileContainer}>
                  <Text style={styles.profileName}>
                    {rowData.profileName}
                  </Text>
                  <View style={styles.profileDescription}>
                    <Text>
                      Worked as a {rowData.occupation} at {rowData.company}
                    </Text>
                    <Text>
                      Added each other on {rowData.addedTime}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>}
        />
        {/* <View style={styles.noFriendsMessage}>
      <Text>
        You don&#39;t have any friends on Mircle at the moment, start adding new
        friends now!
      </Text>
    </View>*/}
      </View>
    );
  }
}
