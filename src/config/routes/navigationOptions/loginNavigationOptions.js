import React, { Component } from "react";

class Hidden extends Component {
  render() {
    return null;
  }
}

const navigationOptions = {
  header: null,
  gesturesEnabled: false,
  drawerLabel: <Hidden />
};

export default navigationOptions;
