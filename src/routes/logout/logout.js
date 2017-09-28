import React, { Component } from "react";
import { View } from "react-native";

import Spinner from "@jacktan/mircle_native_components/spinner";

class Logout extends Component {
  async componentDidMount() {
    const { logout } = this.props;

    await logout();
  }

  render() {
    return (
      <View>
        <Spinner show />
      </View>
    );
  }
}

export default Logout;
