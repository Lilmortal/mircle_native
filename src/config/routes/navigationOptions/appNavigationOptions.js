import React from "react";

import Icon from "../../../components/icon";
import { colors, images } from "../../../config";

const navigationOptions = {
  title: "Friends",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: colors.navigationHeader
  },
  drawerIcon: () => <Icon source={images.friendsIcon} />
};

export default navigationOptions;
