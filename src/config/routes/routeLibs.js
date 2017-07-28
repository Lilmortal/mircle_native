import React from "react";
import { View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";

import Hamburger from "../../components/hamburger";
import { images } from "../../config";

export const withOptions = BaseLayout => Component => options => {
  const screen = ({ navigation }) =>
    <BaseLayout>
      <Component navigation={navigation} />
    </BaseLayout>;

  screen.navigationOptions = Component.navigationOptions;

  return {
    screen,
    navigationOptions: ({ navigation }) => {
      const opt = {};
      if (options.hasHamburgerMenu) {
        opt.headerLeft = (
          <Hamburger onPress={() => navigation.navigate("DrawerOpen")} />
        );
      }

      opt.headerRight = (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {options.hasCamera &&
            <Image
              source={images.camera}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />}
          {options.hasProgressPie &&
            <Progress.Pie
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
