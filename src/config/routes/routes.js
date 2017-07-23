import React from "react";
import { Image } from "react-native";
import Hamburger from "../../components/hamburger";

import images from "../images";

import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import { withOptions } from "./routeLibs";

//import BaseLayout from "../../layouts/baseLayout";
import LoginScreen from "../../layouts/login";

import QrCodeScreen from "../../routes/qrCode";
import FeedsScreen from "../../routes/feeds";
import FriendsScreen from "../../routes/friends";
import ProfileScreen from "../../routes/friends/profile";
import SettingsScreen from "../../routes/settings";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

const navOptions = ({ navigation }) => ({
  headerLeft: <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />,
  headerRight: (
    <Image
      source={images.camera}
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
  )
});

const navOptionsWithNoHamburger = () => ({
  headerRight: (
    <Image
      source={images.camera}
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
  )
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(QrCodeScreen)(navOptions)
});

const feedsStack = StackNavigator({
  Feeds: withOptions(FeedsScreen)(navOptions)
});

const friendsTab = TabNavigator({
  Friends: { screen: FriendsScreen },
  Pending: { screen: FriendsScreen },
  Waiting: { screen: FriendsScreen },
  Blocked: { screen: FriendsScreen }
});

const friendsStack = StackNavigator({
  Friends: withOptions(friendsTab)(navOptions),
  Profile: withOptions(ProfileScreen)(navOptionsWithNoHamburger)
});

const settingsStack = StackNavigator({
  Settings: withOptions(SettingsScreen)(navOptions)
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
