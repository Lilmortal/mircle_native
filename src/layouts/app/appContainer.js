import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withNavigation } from "react-navigation";

import App from "./app";

import { pushNotification } from "../../libs";
import { addFriend, getUserById, addFeed } from "../../api";
import { cameraState, userState, settingsState } from "../../states";

const { UPDATE_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;

const { UPDATE_FEEDS, UPDATE_FRIENDS } = userState.actions;
const { getId } = userState.selectors;

const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    cameraActive: getCameraActive,
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    addFriend: async (qrCode, id) => {
      let friend = null;
      if (qrCode.type === "QR_CODE") {
        try {
          dispatch(UPDATE_CAMERA_ACTIVE(false));

          const friendId = qrCode.data;
          friend = await addFriend(id, friendId);

          const feedMessage = `You and ${friend.firstName} ${friend.surname} are now friends!`;
          const feed = {
            profileImage: friend.profileImage,
            firstName: friend.firstName,
            surname: friend.surname,
            feedDate: new Date(),
            message: feedMessage,
          };
          await addFeed(id, feed);
          dispatch(UPDATE_FEEDS(feed));
          Alert.alert(
            "You added a friend!",
            `${friend.firstName} ${friend.surname} is now on your friend list.`
          );

          dispatch(UPDATE_FRIENDS(friend));
        } catch (err) {
          Alert.alert("Attempting to add a friend failed.", err.toString());
        }
      }
      return friend;
    },
    sendANotification: (friend, sound, soundVolume, vibration) => {
      pushNotification.localNotification({
        title: `You just added ${friend.firstName} ${friend.surname}`,
        message: "In the future this message will show where you two meet.",
        playSound: sound,
        number: soundVolume,
        vibrate: vibration,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withNavigation(App)
);
