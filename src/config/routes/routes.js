import React from "react";
import { View } from "react-native";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";

import DrawerPanel from "./drawerPanel";
import { withOptions } from "./routeLibs";

import Icon from "../../components/icon";
import images from "../images";

import {
  appNavigationOptions,
  loginNavigationOptions,
  settingsNavigationOptions
} from "./navigationOptions";

import AppLayout from "../../layouts/app";
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
import MapScreen from "../../routes/map";
import ProfileScreen from "../../routes/profile";
import SettingsScreen from "../../routes/settings";

const profileStack = StackNavigator({
  Profile: withOptions(AppLayout)(ProfileScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Profile",
    drawerIcon: () => <Icon source={images.profileIcon} />
  })
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(AppLayout)(QrCodeScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "QR code",
    drawerIcon: () => <Icon source={images.qrCodeIcon} />
  })
});

const feedsStack = StackNavigator({
  Feeds: withOptions(AppLayout)(FeedsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Feeds",
    drawerIcon: () => <Icon source={images.feedsIcon} />
  })
});

const friendsStack = StackNavigator({
  Friends: withOptions(AppLayout)(FriendsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Friends",
    drawerIcon: () => <Icon source={images.friendsIcon} />
  }),
  FriendsProfile: withOptions(AppLayout)(ProfileScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Will Smith",
    drawerIcon: () => <Icon source={images.friendsIcon} />
  }),
  FriendsMap: withOptions(AppLayout)(MapScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Where you two meet",
    // map icon
    drawerIcon: () => <Icon source={images.friendsIcon} />
  })
});

const settingsStack = StackNavigator({
  Settings: withOptions(AppLayout)(SettingsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: settingsNavigationOptions,
    title: "Settings",
    drawerIcon: () => <Icon source={images.settingsIcon} />
  })
});

const loginStack = StackNavigator({
  Login: withOptions(LoginLayout)(LoginScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: loginNavigationOptions,
    title: "Logout",
    drawerIcon: () => <Icon source={images.logoutIcon} />
  }),
  ForgotPassword: withOptions(LoginLayout)(ForgotPasswordScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: appNavigationOptions,
    title: "Back to home page"
  }),
  RegisterStep1: withOptions(RegisterLayout)(RegisterStep1Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.25,
    navigationOptions: settingsNavigationOptions,
    title: "Step 1"
  }),
  RegisterStep2: withOptions(RegisterLayout)(RegisterStep2Screen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.5,
    navigationOptions: settingsNavigationOptions,
    title: "Step 2"
  }),
  RegisterSummary: withOptions(RegisterLayout)(RegisterSummaryScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.75,
    navigationOptions: settingsNavigationOptions,
    title: "Summary"
  }),
  RegisterEmailConfirmation: withOptions(RegisterLayout)(
    RegisterEmailConfirmationScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 1,
    navigationOptions: settingsNavigationOptions,
    headerLeft: null,
    title: "Email confirmation"
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
