import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";

import { RegularText, SmallText } from "../../components/text";
import Feed from "../../components/feed";
import Spinner from "../../components/spinner";
import ProfileImage from "../../components/profileImage";
import { images } from "../../config";
import styles from "./styles";

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: true
    };
  }

  async componentDidMount() {
    const { getFeeds } = this.props;
    const feeds = await getFeeds();
    this.setState({ dataSource: feeds });
    this.setState({ loading: false });
  }

  render() {
    return (
      <View>
        <Spinner show={this.state.loading} />
        <FlatList
          data={this.state.dataSource}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <View style={styles.noFeedMessage}>
              <RegularText>
                Start adding new friends to populate your feeds!
              </RegularText>
            </View>
          }
          renderItem={({ item }) =>
            <Feed key={item.id}>
              <ProfileImage source={item.profileImage} />
              <View style={styles.feedContainer}>
                <RegularText bold>
                  {item.name}
                </RegularText>
                <SmallText>
                  {item.date}
                </SmallText>
                <RegularText>
                  {item.message}
                </RegularText>
              </View>
            </Feed>}
        />
      </View>
    );
  }
}
