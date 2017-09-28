import React from "react";
import { View } from "react-native";
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import { DrawerPanel } from "./components";
import { withOptions } from "./routeLibs";
import images from "../images";
import routeKeys from "../routeKeys";

import {
  appNavigationOptions,
  loginNavigationOptions,
  registrationNavigationOptions,
  settingsNavigationOptions
} from "./navigationOptions";

import AppLayout from "../../layouts/app";
import LoginLayout from "../../layouts/login";
import RegisterLayout from "../../layouts/register";

import ForgotPasswordScreen from "../../routes/forgotPassword";
import LoginScreen from "../../routes/login";
import LogoutScreen from "../../routes/logout";
import RegisterAccountCreationScreen from "../../routes/register/routes/accountCreation";
import RegisterAdditionalDetailsScreen from "../../routes/register/routes/additionalDetails";
import RegisterProfileImageUploadScreen from "../../routes/register/routes/profileImageUpload";
import RegisterAccountSummaryScreen from "../../routes/register/routes/accountSummary";
import RegisterEmailConfirmationScreen from "../../routes/register/routes/emailConfirmation";
import QrCodeScreen from "../../routes/qrCode";
import FeedsScreen from "../../routes/feeds";
import FriendsScreen from "../../routes/friends";
import MapScreen from "../../routes/map";
import UserProfileScreen from "../../routes/profile/user";
import FriendProfileScreen from "../../routes/profile/friend";
import SettingsScreen from "../../routes/settings";

const profileStack = StackNavigator({
  [routeKeys.UserProfile]: withOptions(AppLayout)(UserProfileScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Profile",
    drawerIcon: () => <Icon name="user" color="black" />
  })
});

const qrCodeStack = StackNavigator({
  [routeKeys.QrCode]: withOptions(AppLayout)(QrCodeScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "QR code",
    drawerIcon: () => <Icon name="qrcode" color="black" />
  })
});

const feedsStack = StackNavigator({
  [routeKeys.Feeds]: withOptions(AppLayout)(FeedsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Feeds",
    drawerIcon: () => <Icon name="newspaper-o" color="black" />
  })
});

const friendsStack = StackNavigator({
  [routeKeys.Friends]: withOptions(AppLayout)(FriendsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Friends",
    drawerIcon: () => <Icon name="users" color="black" />
  }),
  [routeKeys.FriendsProfile]: withOptions(AppLayout)(FriendProfileScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Friend profile",
    drawerIcon: () => <Icon name="user" color="black" />
  }),
  [routeKeys.FriendsMap]: withOptions(AppLayout)(MapScreen)({
    hasHamburgerMenu: false,
    hasCamera: true,
    navigationOptions: appNavigationOptions,
    title: "Where you two meet",
    drawerIcon: () => <Icon name="map-marker" color="black" />
  })
});

const settingsStack = StackNavigator({
  [routeKeys.Settings]: withOptions(AppLayout)(SettingsScreen)({
    hasHamburgerMenu: true,
    hasCamera: true,
    navigationOptions: settingsNavigationOptions,
    title: "Settings",
    drawerIcon: () => <Icon name="cog" color="black" />
  })
});

const logoutStack = StackNavigator({
  [routeKeys.Logout]: withOptions(LoginLayout)(LogoutScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: {
      header: null
    },
    title: "Logout",
    drawerIcon: () => <Icon name="sign-out" color="black" />
  })
});

const loginStack = StackNavigator({
  [routeKeys.Login]: withOptions(LoginLayout)(LoginScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: loginNavigationOptions
  }),

  [routeKeys.ForgotPassword]: withOptions(LoginLayout)(ForgotPasswordScreen)({
    hasHamburgerMenu: false,
    hasCamera: false,
    navigationOptions: appNavigationOptions,
    title: "Back to home page"
  }),
  [routeKeys.RegisterAccountCreation]: withOptions(RegisterLayout)(
    RegisterAccountCreationScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressBar: true,
    progress: 0,
    navigationOptions: registrationNavigationOptions,
    title: "Step 1"
  }),
  [routeKeys.RegisterAdditionalDetails]: withOptions(RegisterLayout)(
    RegisterAdditionalDetailsScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressBar: true,
    progress: 0.25,
    navigationOptions: registrationNavigationOptions,
    title: "Step 2"
  }),
  [routeKeys.RegisterProfileImageUpload]: withOptions(RegisterLayout)(
    RegisterProfileImageUploadScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressBar: true,
    progress: 0.5,
    navigationOptions: registrationNavigationOptions,
    title: "Photo Upload"
  }),
  [routeKeys.RegisterAccountSummary]: withOptions(RegisterLayout)(
    RegisterAccountSummaryScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressBar: true,
    progress: 0.75,
    navigationOptions: registrationNavigationOptions,
    title: "Summary"
  }),
  [routeKeys.RegisterEmailConfirmation]: withOptions(RegisterLayout)(
    RegisterEmailConfirmationScreen
  )({
    hasHamburgerMenu: false,
    hasCamera: false,
    hasProgressBar: true,
    progress: 1,
    navigationOptions: registrationNavigationOptions,
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
    Logout: { screen: logoutStack },
    Login: { screen: loginStack }
  },
  {
    initialRouteName: "Login",
    drawerWidth: 300,
    contentComponent: props => (
      <View>
        <DrawerPanel
          onPress={() => props.navigation.navigate(routeKeys.UserProfile)}
        />
        <DrawerItems {...props} />
      </View>
    )
  }
);

export default drawerNav;
