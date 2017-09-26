import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";

import { RegularText, SmallText } from "@jacktan/mircle_native_components/text";
import Feed from "@jacktan/mircle_native_components/feed";
import Spinner from "@jacktan/mircle_native_components/spinner";
import ProfileImage from "@jacktan/mircle_native_components/profileImage";
import { images } from "../../config";
import styles from "./styles";

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { feeds } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: feeds.length > 0 ? "column" : "row",
          alignItems: feeds.length > 0 ? "stretch" : "center"
        }}
      >
        <Spinner show={this.state.loading} />
        <FlatList
          data={feeds}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noFeedMessage}>
              <RegularText>
                Start adding new friends to populate your feeds!
              </RegularText>
            </View>
          }
          renderItem={({ item }) => (
            <Feed key={item.id}>
              <ProfileImage source={item.profileImage} />
              <View style={styles.feedContainer}>
                <RegularText bold>{item.name}</RegularText>
                <SmallText>{item.date}</SmallText>
                <RegularText>{item.message}</RegularText>
              </View>
            </Feed>
          )}
        />
      </View>
    );
  }
}
