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

const navOptions = {
  navigationOptions: ({ navigation }) => ({
    headerLeft: <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />,
    headerRight: (
      <Image
        source={images.camera}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
    )
  })
};

const withStack = navOptions => obj => {
  return StackNavigator(obj, navOptions);
};

const friendsTab = TabNavigator({
  Friends: { screen: FriendsScreen },
  Pending: { screen: FriendsScreen },
  Waiting: { screen: FriendsScreen },
  Blocked: { screen: FriendsScreen }
});

const qrCodeStack = withStack(navOptions)({
  QrCode: { screen: QrCodeScreen }
});

const feedsStack = withStack(navOptions)({
  Feeds: { screen: FeedsScreen }
});

const friendsStack = withStack(navOptions)({
  Friends: { screen: friendsTab }
});

const settingsStack = withStack(navOptions)({
  Settings: { screen: SettingsScreen }
});

const drawerNav = DrawerNavigator(
  {
    QrCode: { screen: qrCodeStack },
    Feeds: { screen: feedsStack },
    Friends: { screen: friendsStack },
    Settings: { screen: settingsStack },
    Login: { screen: LoginScreen, title: "Logout" }
  },
  {
    initialRouteName: "Login",
    drawerWidth: 200
  }
);

export default drawerNav;
