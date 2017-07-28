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

import BaseLayout from "../../layouts/baseLayout";
import LoginLayout from "../../layouts/login";
import RegisterLayout from "../../layouts/register";

import ForgotPasswordScreen from "../../routes/forgotPassword";
import LoginScreen from "../../routes/login";
import RegisterStep1Screen from "../../routes/register/step1";
import RegisterStep2Screen from "../../routes/register/step2";
import RegisterSummaryScreen from "../../routes/register/summary";
import RegisterEmailConfirmationScreen from "../../routes/register/emailConfirmation";
import QrCodeScreen from "../../routes/qrCode";
import FeedsScreen from "../../routes/feeds";
import FriendsScreen from "../../routes/friends";
import ProfileScreen from "../../routes/profile";
import SettingsScreen from "../../routes/settings";

const profileStack = StackNavigator({
  Profile: withOptions(BaseLayout)(ProfileScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(BaseLayout)(QrCodeScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const feedsStack = StackNavigator({
  Feeds: withOptions(BaseLayout)(FeedsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const friendsStack = StackNavigator({
  Friends: withOptions(BaseLayout)(FriendsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  }),
  FriendsProfile: withOptions(BaseLayout)(ProfileScreen)({
    hasHamburgerMenu: false,
    hasCamera: true
  })
});

const settingsStack = StackNavigator({
  Settings: withOptions(BaseLayout)(SettingsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true
  })
});

const loginStack = StackNavigator({
  Login: withOptions(LoginLayout)(LoginScreen)({
    hasHamburgerMenu: false,
    hasCamera: false
  }),
  ForgotPassword: withOptions(LoginLayout)(ForgotPasswordScreen)({
    hasHamburgerMenu: false,
    hasCamera: false
  }),
  RegisterStep1: withOptions(RegisterLayout)(RegisterStep1Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.25
  }),
  RegisterStep2: withOptions(RegisterLayout)(RegisterStep2Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.5
  }),
  RegisterSummary: withOptions(RegisterLayout)(RegisterSummaryScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.75
  }),
  RegisterEmailConfirmation: withOptions(RegisterLayout)(
    RegisterEmailConfirmationScreen
  )({
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
