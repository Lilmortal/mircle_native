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
import BlockedFriendsScreen from "../../routes/friends/blocked";
import FriendsScreen from "../../routes/friends/friends";
import PendingFriendsScreen from "../../routes/friends/pending";
import RequestFriendsScreen from "../../routes/friends/request";
import BlockedProfileScreen from "../../routes/friends/blocked/profile";
import FriendsProfileScreen from "../../routes/friends/friends/profile";
import PendingProfileScreen from "../../routes/friends/pending/profile";
import RequestProfileScreen from "../../routes/friends/request/profile";
import SettingsScreen from "../../routes/settings";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

const mainOptions = ({ navigation }) => ({
  headerLeft: <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />,
  headerRight: (
    <Image
      source={images.camera}
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
  )
});

const childOptions = () => ({
  headerRight: (
    <Image
      source={images.camera}
      style={{ width: 50, height: 50, marginRight: 10 }}
    />
  )
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(QrCodeScreen)(mainOptions)
});

const feedsStack = StackNavigator({
  Feeds: withOptions(FeedsScreen)(mainOptions)
});

const friendsTab = TabNavigator({
  Friends: { screen: FriendsScreen },
  Pending: { screen: PendingFriendsScreen },
  Request: { screen: RequestFriendsScreen },
  Blocked: { screen: BlockedFriendsScreen }
});

const friendsStack = StackNavigator({
  Friends: withOptions(friendsTab)(mainOptions),
  BlockedProfile: withOptions(BlockedProfileScreen)(childOptions),
  FriendsProfile: withOptions(FriendsProfileScreen)(childOptions),
  PendingProfile: withOptions(PendingProfileScreen)(childOptions),
  RequestProfile: withOptions(RequestProfileScreen)(childOptions)
});

const settingsStack = StackNavigator({
  Settings: withOptions(SettingsScreen)(mainOptions)
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
