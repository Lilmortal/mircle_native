import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import * as Progress from "react-native-progress";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Icon from "react-native-vector-icons/FontAwesome";

import store from "../../store";
import Hamburger from "../../components/hamburger";
import { images } from "../../config";
import cameraState from "../../states/camera";

const { UPDATE_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    isCameraActive: getCameraActive
  });
};

const Camera = ({ isCameraActive, onPress, onPressOut }) =>
  <View>
    {isCameraActive &&
      <TouchableHighlight onPress={onPressOut}>
        <Icon
          name="times"
          color="black"
          size={45}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginRight: 10
          }}
        />
      </TouchableHighlight>}
    {!isCameraActive &&
      <TouchableHighlight onPress={onPress}>
        <Icon
          name="camera"
          color="black"
          size={45}
          style={{
            width: 50,
            height: 50,
            marginTop: 10,
            marginRight: 10
          }}
        />
      </TouchableHighlight>}
  </View>;

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
              onPress={() => store.dispatch(UPDATE_CAMERA_ACTIVE(true))}
              onPressOut={() => store.dispatch(UPDATE_CAMERA_ACTIVE(false))}
            />}
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
