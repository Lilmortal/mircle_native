import React from "react";
import { View } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator,
  DrawerItems
} from "react-navigation";

import DrawerPanel from "./drawerPanel";
import { withOptions } from "./routeLibs";

//import BaseLayout from "../../layouts/baseLayout";
import LoginScreen from "../../layouts/login";
import RegisterStep1Screen from "../../routes/register/step1";
import RegisterStep2Screen from "../../routes/register/step2";
import RegisterSummaryScreen from "../../routes/register/summary";
import RegisterEmailConfirmationScreen from "../../routes/register/emailConfirmation";

import QrCodeScreen from "../../routes/qrCode";
import FeedsScreen from "../../routes/feeds";
import FriendsScreen from "../../routes/friends";
import ProfileScreen from "../../routes/profile";
import SettingsScreen from "../../routes/settings";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

const profileStack = StackNavigator({
  Profile: withOptions(ProfileScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(QrCodeScreen)({ hasHamburgerMenu: true, hasCamera: true })
});

const feedsStack = StackNavigator({
  Feeds: withOptions(FeedsScreen)({ hasHamburgerMenu: true, hasCamera: true })
});

const friendsStack = StackNavigator({
  Friends: withOptions(FriendsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  }),
  FriendsProfile: withOptions(ProfileScreen)({
    hasHamburgerMenu: false,
    hasCamera: true
  })
});

const settingsStack = StackNavigator({
  Settings: withOptions(SettingsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const loginStack = StackNavigator({
  Login: withOptions(LoginScreen)({
    hasHamburgerMenu: false,
    hasCamera: false
  }),
  RegisterStep1: withOptions(RegisterStep1Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.25
  }),
  RegisterStep2: withOptions(RegisterStep2Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.5
  }),
  RegisterSummary: withOptions(RegisterSummaryScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.75
  }),
  RegisterEmailConfirmation: withOptions(RegisterEmailConfirmationScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 1
  })
});

const drawerNav = DrawerNavigator(
  {
    Profile: { screen: profileStack },
    QrCode: { screen: qrCodeStack },
    Feeds: { screen: feedsStack },
    Friends: { screen: friendsStack },
    Settings: { screen: settingsStack },
    Login: { screen: loginStack }
  },
  {
    initialRouteName: "Login",
    drawerWidth: 300,
    contentComponent: props =>
      <View>
        <DrawerPanel navigation={props.navigation} />
        <DrawerItems {...props} />
      </View>
  }
);

export default drawerNav;
