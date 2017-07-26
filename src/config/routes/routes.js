import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import * as Progress from "react-native-progress";

import Hamburger from "../../components/hamburger";

import images from "../images";

import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator,
  DrawerItems
} from "react-navigation";

import { withOptions } from "./routeLibs";

import BackgroundImage from "../../components/backgroundImage";
import ProfilePicture from "../../components/profilePicture";

//import BaseLayout from "../../layouts/baseLayout";
import LoginScreen from "../../layouts/login";
import RegisterStep1Screen from "../../routes/register/step1";
import RegisterStep2Screen from "../../routes/register/step2";
import RegisterSummaryScreen from "../../routes/register/summary";
import RegisterEmailConfirmationScreen from "../../routes/register/emailConfirmation";

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
import BiographyScreen from "../../routes/profile/biography";
import SettingsScreen from "../../routes/settings";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

const styles = {
  drawerNavigation: {
    width: null,
    height: null,
    resizeMode: "cover"
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white"
  },
  email: {
    fontSize: 10,
    color: "white"
  }
};

const contentComponent = props =>
  <View>
    <TouchableHighlight onPress={() => props.navigation.navigate("Profile")}>
      <Image
        source={images.drawerNavigation}
        style={styles.drawerNavigation}
        blurRadius={1}
      >
        <View style={styles.header}>
          <ProfilePicture source={images.anonymous} />
          <Text style={styles.name}>Will Smith</Text>
          <Text style={styles.email}>willsmith@gmail.com</Text>
        </View>
      </Image>
    </TouchableHighlight>
    <DrawerItems {...props} />
  </View>;

const mainOptions = ({ navigation }) => ({
  headerLeft: <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />,
  headerRight: (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={images.camera}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
    </View>
  )
});

const childOptions = () => ({
  headerRight: (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={images.camera}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
    </View>
  )
});

const register1Options = ({ navigation }) => ({
  headerRight: (
    <View style={{ flexDirection: "row", paddingRight: 20 }}>
      <Progress.Pie progress={0.25} showsText />
    </View>
  )
});

const register2Options = ({ navigation }) => ({
  headerRight: (
    <View style={{ flexDirection: "row", paddingRight: 20 }}>
      <Progress.Pie progress={0.5} showsText />
    </View>
  )
});

const register3Options = ({ navigation }) => ({
  headerRight: (
    <View style={{ flexDirection: "row", paddingRight: 20 }}>
      <Progress.Pie progress={0.75} showsText />
    </View>
  )
});

const register4Options = ({ navigation }) => ({
  headerRight: (
    <View style={{ flexDirection: "row", paddingRight: 20 }}>
      <Progress.Pie progress={1} showsText />
    </View>
  )
});

const profileTabs = TabNavigator(
  {
    Biography: { screen: BiographyScreen }
  },
  {
    tabBarPosition: "bottom"
  }
);

const profileStack = StackNavigator({
  Profile: withOptions(profileTabs)(mainOptions)
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

const loginStack = StackNavigator({
  Login: { screen: LoginScreen, title: "Logout" },
  RegisterStep1: withOptions(RegisterStep1Screen)(register1Options),
  RegisterStep2: withOptions(RegisterStep2Screen)(register2Options),
  RegisterSummary: withOptions(RegisterSummaryScreen)(register3Options),
  RegisterEmailConfirmation: withOptions(RegisterEmailConfirmationScreen)(
    register4Options
  )
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
    contentComponent
  }
);

export default drawerNav;
