import React, { Component } from "react";
import MapView from "react-native-maps";

import { colors, images } from "../../config";
import Icon from "../../components/icon";
import styles from "./styles";

export default class Map extends Component {
  static navigationOptions = {
    title: "Where you two meet each other",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: colors.navigationHeader
    },
    drawerIcon: () => <Icon source={images.profileIcon} />
  };

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}
