import React from "react";
import { View, Text, Image } from "react-native";
import * as Progress from "react-native-progress";
import Camera from "react-native-camera";

import Hamburger from "../../components/hamburger";
import { images } from "../../config";

console.log(Camera);
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
            <Camera
              ref={cam => {
                this.camera = cam;
              }}
              //aspect={Camera.constants.Aspect.fill}
            >
              <Image
                source={images.camera}
                style={{ width: 50, height: 50, marginRight: 10 }}
                onPress={stuff => console.log(stuff)}
              />
            </Camera>}
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
