import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";

import Feed from "../../components/feed";
import ProfileImage from "../../components/profileImage";
import { images } from "../../config";
import styles from "./styles";

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  async componentDidMount() {
    const { getFeeds } = this.props;
    const feeds = await getFeeds();
    console.log(feeds);
    this.setState({ dataSource: feeds });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noFeedMessage}>
              <Text>Start adding new friends to populate your feeds!</Text>
            </View>
          }
          renderItem={({ item }) =>
            <Feed key={item.id}>
              <ProfileImage source={item.profileImage} />
              <View style={styles.feedContainer}>
                <Text style={styles.feedName}>
                  {item.name}
                </Text>
                <Text style={styles.feedDate}>
                  {item.date}
                </Text>
                <Text style={styles.feedMessage}>
                  {item.message}
                </Text>
              </View>
            </Feed>}
        />
      </View>
    );
  }
}
