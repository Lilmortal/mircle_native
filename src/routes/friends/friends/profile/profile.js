import React, { Component } from "react";
import { View, Text, Image, ListView } from "react-native";

import images from "../../../../config/images";
import styles from "./styles";

export default class Profile extends Component {
  static navigationOptions = {
    title: "Will Smith"
  };

  state: {
    dataSource: Object
  };

  constructor(props: {}) {
    super(props);

    let id = 0;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          id: id++,
          linkImage: images.facebookLogo,
          linkURL: "facebook.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.twitterLogo,
          linkURL: "twitter.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.facebookLogo,
          linkURL: "facebook.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.twitterLogo,
          linkURL: "twitter.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.facebookLogo,
          linkURL: "facebook.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.twitterLogo,
          linkURL: "twitter.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.facebookLogo,
          linkURL: "facebook.com/willsmith"
        },
        {
          id: id++,
          linkImage: images.twitterLogo,
          linkURL: "twitter.com/willsmith"
        }
      ])
    };
  }

  render() {
    return (
      <View style={styles.profile}>
        <View style={styles.mainDescription}>
          <Image source={images.anonymous} style={styles.profilePicture} />
          <View style={styles.profileDescription}>
            <Text style={styles.title}>Profile</Text>
            <Text>Age: 32</Text>
            <Text>Work: Actor</Text>
            <Text>Occupation: Hollywood</Text>
          </View>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => {
            const styleLink =
              rowData.id === 0
                ? [styles.link, { marginTop: 20, borderTopWidth: 1 }]
                : styles.link;

            return (
              <View style={styleLink}>
                <Image source={rowData.linkImage} style={styles.logo} />
                <Text style={styles.linkDescription}>
                  {rowData.linkURL}
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
