import React from "react";
import { Image } from "react-native";
import Hamburger from "../../components/hamburger";

import images from "../images";

import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import { withStack } from "./routeLibs";

//import BaseLayout from "../../layouts/baseLayout";
import LoginScreen from "../../layouts/login";

import QrCodeScreen from "../../routes/qrCode";
import FeedsScreen from "../../routes/feeds";
import FriendsScreen from "../../routes/friends";
import SettingsScreen from "../../routes/settings";
import ChangePasswordScreen from "../../routes/changePassword";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

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

const qrCodeStack = withStack(navOptions)({
  QrCode: { screen: QrCodeScreen }
});

const feedsStack = withStack(navOptions)({
  Feeds: { screen: FeedsScreen }
});

const friendsTab = TabNavigator({
  Friends: { screen: FriendsScreen },
  Pending: { screen: FriendsScreen },
  Waiting: { screen: FriendsScreen },
  Blocked: { screen: FriendsScreen }
});

const friendsStack = withStack(navOptions)({
  Friends: { screen: friendsTab }
});

const settingsStack = withStack(navOptions)({
  Settings: { screen: SettingsScreen },
  ChangePassword: { screen: ChangePasswordScreen }
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
