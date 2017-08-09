import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import * as Progress from "react-native-progress";

import { Camera } from "./components";
import Hamburger from "../../components/hamburger";
import { routeKeys, images } from "../../config";

export const withOptions = BaseLayout => Component => options => {
  const screen = ({ navigation }) =>
    <BaseLayout>
      <Component navigation={navigation} />
    </BaseLayout>;

  options.navigationOptions = {
    ...options.navigationOptions,
    drawerIcon: options.drawerIcon,
    title: options.title,
    headerLeft: options.headerLeft
  };
  screen.navigationOptions = options.navigationOptions;

  return {
    screen,
    navigationOptions: ({ navigation }) => {
      const opt = {};
      if (options.hasHamburgerMenu) {
        opt.headerLeft = (
          <Hamburger
            onPress={() => navigation.navigate(routeKeys.DrawerOpen)}
          />
        );
      }

      opt.headerRight = (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {options.hasCamera && <Camera />}
          {options.hasProgressBar &&
            <Progress.Bar
              progress={options.progress}
              showsText
              style={{ marginRight: 10 }}
            />}
        </View>
      );

      return opt;
    }
  };
};
