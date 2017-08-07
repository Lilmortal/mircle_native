import React from "react";
import { View } from "react-native";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import DrawerPanel from "./drawerPanel";
import { withOptions } from "./routeLibs";
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
import RegisterAccountCreationScreen from "../../routes/register/routes/accountCreation";
import RegisterAdditionalDetailsScreen from "../../routes/register/routes/additionalDetails";
import RegisterAccountSummaryScreen from "../../routes/register/routes/accountSummary";
import RegisterEmailConfirmationScreen from "../../routes/register/routes/emailConfirmation";
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
    drawerIcon: () => <Icon name="user" color="black" />
  })
});

const qrCodeStack = StackNavigator({
  QrCode: withOptions(AppLayout)(QrCodeScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "QR code",
    drawerIcon: () => <Icon name="qrcode" color="black" />
  })
});

const feedsStack = StackNavigator({
  Feeds: withOptions(AppLayout)(FeedsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Feeds",
    drawerIcon: () => <Icon name="newspaper-o" color="black" />
  })
});

const friendsStack = StackNavigator({
  Friends: withOptions(AppLayout)(FriendsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Friends",
    drawerIcon: () => <Icon name="users" color="black" />
  }),
  FriendsProfile: withOptions(AppLayout)(ProfileScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Will Smith",
    drawerIcon: () => <Icon name="user" color="black" />
  }),
  FriendsMap: withOptions(AppLayout)(MapScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Where you two meet",
    // map icon
    drawerIcon: () => <Icon name="map-marker" color="black" />
  })
});

const settingsStack = StackNavigator({
  Settings: withOptions(AppLayout)(SettingsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: settingsNavigationOptions,
    title: "Settings",
    drawerIcon: () => <Icon name="cog" color="black" />
  })
});

const loginStack = StackNavigator({
  Login: withOptions(LoginLayout)(LoginScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: loginNavigationOptions,
    title: "Logout",
    drawerIcon: () => <Icon name="sign-out" color="black" />
  }),
  ForgotPassword: withOptions(LoginLayout)(ForgotPasswordScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: appNavigationOptions,
    title: "Back to home page"
  }),
  RegisterAccountCreation: withOptions(RegisterLayout)(
    RegisterAccountCreationScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.25,
    navigationOptions: settingsNavigationOptions,
    title: "Step 1"
  }),
  RegisterAdditionalDetails: withOptions(RegisterLayout)(
    RegisterAdditionalDetailsScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressPie: true,
    progress: 0.5,
    navigationOptions: settingsNavigationOptions,
    title: "Step 2"
  }),
  RegisterAccountSummary: withOptions(RegisterLayout)(
    RegisterAccountSummaryScreen
  )({
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
