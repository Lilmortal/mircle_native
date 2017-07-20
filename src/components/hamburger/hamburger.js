import React, { Component } from "react";
import { View } from "react-native";
import ReactNativeHamburger from "react-native-hamburger";

import styles from "./styles";

type HamburgerProps = {
  navigation: Object
};

export default class Hamburger extends Component {
  state: {
    active: boolean
  };

  constructor(props: HamburgerProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleHamburgerActive = () => {
    this.setState({ active: !this.state.active });

    if (!this.state.active) {
      this.props.navigation.navigate("DrawerOpen");
    } else {
      this.props.navigation.navigate("DrawerClose");
    }
  };

  render() {
    return (
      <View style={styles.hamburger}>
        <ReactNativeHamburger
          active={this.state.active}
          type="cross"
          onPress={this.toggleHamburgerActive}
        />
      </View>
    );
  }
}
