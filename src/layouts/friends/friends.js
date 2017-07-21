import React, { Component } from "react";
import { View, Text, ListView } from "react-native";

import styles from "./styles";

export default class Friends extends Component {
  static navigationOptions = {
    title: "Friends"
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
      <Text>
        You don&#39;t have any friends on Mircle at the moment, start adding new
        friends now!
      </Text>
    </View>*/}
      </View>
    );
  }
}
