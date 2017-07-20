import React from "react";
import { Image } from "react-native";
import Hamburger from "../components/hamburger";

import images from "./images";

import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import QrCodeScreen from "../layouts/qrCode";
import FeedsScreen from "../layouts/feeds";
import FriendsScreen from "../layouts/friends";
import SettingsScreen from "../layouts/settings";
import LoginScreen from "../layouts/login";

const tabNav = TabNavigator({
  QrCode: { screen: QrCodeScreen },
  Feeds: { screen: FeedsScreen },
  Friends: { screen: FriendsScreen }
});

const drawerNav = DrawerNavigator(
  {
    QrCode: { screen: tabNav },
    Feeds: { screen: tabNav },
    Friends: { screen: tabNav },
    Settings: { screen: SettingsScreen },
    Login: { screen: LoginScreen, title: "Logout" }
  },
  {
    initialRouteName: "Login"
  }
);

const rootNav = StackNavigator(
  {
    Dashboard: { screen: drawerNav }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Mircle",
      headerLeft: <Hamburger navigation={navigation} />,
      headerRight: (
        <Image
          source={images.camera}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
      )
    })
  }
);

export default rootNav;
