import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import store from "../../store";
import Camera from "../../components/camera";
import Hamburger from "../../components/hamburger";
import { images } from "../../config";
import cameraState from "../../states/camera";

const { SET_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    isCameraActive: getCameraActive
  });
};

const CameraContainer = connect(mapStateToProps)(Camera);

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
            <CameraContainer
              onPress={() => store.dispatch(SET_CAMERA_ACTIVE(true))}
              onPressOut={() => store.dispatch(SET_CAMERA_ACTIVE(false))}
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
