import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

import Feed from "../../components/feed";
import Spinner from "../../components/spinner";
import ProfileImage from "../../components/profileImage";

import { images, routeKeys } from "../../config";
import styles from "./styles";

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true
    };
  }

  async componentDidMount() {
    const { getListOfFriends } = this.props;
    const friends = await getListOfFriends();
    this.setState({ dataSource: friends });
    this.setState({ loading: false });
  }

  render() {
    const { goToFriendProfilePage } = this.props;

    return (
      <View>
        <Spinner show={this.state.loading} />
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
            <TouchableOpacity onPress={() => goToFriendProfilePage(item.id)}>
              <View>
                <Feed key={item.id} isSelectable>
                  <ProfileImage source={item.profileImage} />
                  <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>
                      {item.firstName + " " + item.surname}
                    </Text>
                    <View style={styles.profileDescription}>
                      <Text>
                        {item.occupation && `Worked as a {item.occupation}`}
                      </Text>
                      <Text>
                        Added each other on {item.addedTime}
                      </Text>
                    </View>
                  </View>
                </Feed>
              </View>
            </TouchableOpacity>}
        />
      </View>
    );
  }
}
