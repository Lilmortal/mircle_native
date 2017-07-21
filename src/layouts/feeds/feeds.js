// @flow

import React, { Component } from "react";
import { View, Text, ListView } from "react-native";

import styles from "./styles";

export default class Feeds extends Component {
  static navigationOptions = {
    drawerLabel: "Feeds",
    title: "Feeds"
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
      dataSource: ds.cloneWithRows(["row 1", "row 2"])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData =>
            <View style={styles.feed}>
              <Text>
                {rowData}
              </Text>
            </View>}
        />
        {/* <View style={styles.message}>
      <Text>Start adding new friends to populate your feeds!</Text>
    </View>*/}
      </View>
    );
  }
}
