import { DrawerNavigator, TabNavigator } from "react-navigation";

import QrCodeScreen from "../layouts/qrCode";
import FeedsScreen from "../layouts/feeds";
import FriendsScreen from "../layouts/friends";
import SettingsScreen from "../layouts/settings";
import LoginScreen from "../layouts/login";

const tabNav = TabNavigator({
  QrCode: { screen: QrCodeScreen },
  Feeds: { screen: FeedsScreen },
  Friends: { screen: FriendsScreen }
});

const drawerNav = DrawerNavigator({
  QrCode: { screen: tabNav },
  Feeds: { screen: tabNav },
  Friends: { screen: tabNav },
  Settings: { screen: SettingsScreen },
  Login: { screen: LoginScreen, title: "Logout" }
});

export default drawerNav;
