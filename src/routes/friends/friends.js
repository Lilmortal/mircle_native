import React, { Component } from "react";
import { View, Image, FlatList, TouchableOpacity } from "react-native";

import { RegularText } from "../../components/text";
import Feed from "../../components/feed";
import Spinner from "../../components/spinner";
import ProfileImage from "../../components/profileImage";

import { images, routeKeys } from "../../config";
import styles from "./styles";

export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { friends, goToFriendProfilePage } = this.props;

    return (
      <View>
        <Spinner show={this.state.loading} />
        <FlatList
          data={friends}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noFriendsMessage}>
              <RegularText>
                You don&#39;t have any friends on Mircle at the moment, start
                adding new friends now!
              </RegularText>
            </View>
          }
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => goToFriendProfilePage(item.id)}>
              <View>
                <Feed key={item.id} isSelectable>
                  <ProfileImage source={item.profileImage} />
                  <View style={styles.profileContainer}>
                    <RegularText bold>
                      {item.firstName + " " + item.surname}
                    </RegularText>
                    <View style={styles.profileDescription}>
                      <RegularText>
                        {item.occupation && `Worked as a ${item.occupation}`}
                      </RegularText>
                      <RegularText>
                        Added each other on {item.addedTime}
                      </RegularText>
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
