import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "./app";

import { addFriend, getUserById, addFeed } from "../../api";
import { cameraState, userState, settingsState } from "../../states";

const { getCameraActive } = cameraState.selectors;
const { UPDATE_FEEDS } = userState.actions;
const { getFeeds } = userState.selectors;
const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    cameraActive: getCameraActive,
    feeds: getFeeds,
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { feeds, sound, soundVolume, vibration } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    readQRCode: async qrCode => {
      if (qrCode.type === "QR_CODE") {
        try {
          await addFriend(qrCode.data);
          const friend = await getUserById(qrCode.data);
          const feedMessage = `You and ${friend.firstName} ${friend.surname} are now friends!`;
          const feed = {
            profileImage: friends.profileImage,
            firstName: friend.firstName,
            surname: friend.surname,
            feedDate: Date.now(),
            message
          };
          await addFeed(feed);
          dispatch(UPDATE_FEEDS(feed));
          pushNotification.localNotification({
            title: `You just added ${friend.firstName} ${friend.surname}`,
            message: "You two met at Botany Down Centre.",
            playSound: sound,
            number: soundVolume,
            vibrate: vibration
          });
        } catch (err) {
          Alert.alert("Attempting to add a friend failed.", err.toString());
        }
      }
    }
  };
};
export default connect(mapStateToProps, null, mergeProps)(App);
