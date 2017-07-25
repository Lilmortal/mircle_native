import React from "react";
import { View, Text, Image } from "react-native";
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
import SettingsScreen from "../../routes/settings";

//const FriendsScreenWithLayout = withLayout(BaseLayout)(FriendsScreen);

/*const contentComponent = props => {
  console.log(props);

  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};*/

const mainOptions = ({ navigation }) => ({
  headerLeft: <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />,
  headerRight: (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={images.profile}
        style={{ marginRight: 20, width: 50, height: 50 }}
      />
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
        source={images.profile}
        style={{ marginRight: 20, width: 50, height: 50 }}
      />
      <Image
        source={images.camera}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
    </View>
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

const loginStack = StackNavigator({
  Login: { screen: LoginScreen, title: "Logout" },
  RegisterStep1: { screen: RegisterStep1Screen },
  RegisterStep2: { screen: RegisterStep2Screen },
  RegisterSummary: { screen: RegisterSummaryScreen },
  RegisterEmailConfirmation: { screen: RegisterEmailConfirmationScreen }
});

const drawerNav = DrawerNavigator(
  {
    QrCode: { screen: qrCodeStack },
    Feeds: { screen: feedsStack },
    Friends: { screen: friendsStack },
    Settings: { screen: settingsStack },
    Login: { screen: loginStack }
  },
  {
    initialRouteName: "Login",
    drawerWidth: 200
    //contentComponent
  }
);

export default drawerNav;
