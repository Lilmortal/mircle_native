import { DrawerNavigator } from "react-navigation";

import Login from "../layouts/login";
import Home from "../layouts/home";

const MircleApp = DrawerNavigator({
  Home: { screen: Home },
  Login: { screen: Login }
});

export default MircleApp;
