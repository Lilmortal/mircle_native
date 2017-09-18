import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import App from "./app";

import { pushNotification } from "../../libs";
import { addFriend, getUserById, addFeed } from "../../api";
import { cameraState, userState, settingsState } from "../../states";

const { UPDATE_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;
const { UPDATE_FEEDS } = userState.actions;
const { getId, getFeeds } = userState.selectors;
const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    cameraActive: getCameraActive,
    feeds: getFeeds,
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id, feeds, sound, soundVolume, vibration } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
    readQRCode: async qrCode => {
      if (qrCode.type === "QR_CODE") {
        try {
          dispatch(UPDATE_CAMERA_ACTIVE(false));
          await addFriend(id, qrCode.data);
          const friend = await getUserById(qrCode.data);
          const feedMessage = `You and ${friend.firstName} ${friend.surname} are now friends!`;
          const feed = {
            profileImage: friend.profileImage,
            firstName: friend.firstName,
            surname: friend.surname,
            feedDate: Date.now(),
            message: feedMessage
          };
          await addFeed(feed);
          const updatedFeeds = feeds.concat(feed);
          dispatch(UPDATE_FEEDS(updatedFeeds));
          pushNotification.localNotification({
            title: `You just added ${friend.firstName} ${friend.surname}`,
            message: "You two met at Botany Down Centre.",
            playSound: sound,
            number: soundVolume,
            vibrate: vibration
          });
          Alert.alert(
            "You added a friend!",
            `${friend.firstName} ${friend.surname} is now on your friend list.`
          );
        } catch (err) {
          Alert.alert("Attempting to add a friend failed.", err.toString());
        }
      }
    }
  };
};
export default connect(mapStateToProps, null, mergeProps)(App);
