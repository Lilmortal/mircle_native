import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withNavigation } from "react-navigation";

import App from "./app";

import { pushNotification } from "../../libs";
import { addFriend, getUserById, addFeed } from "../../api";
import {
  cameraState,
  stacksState,
  userState,
  settingsState
} from "../../states";

const { UPDATE_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;

const { UPDATE_STACKS, CLEAR_STACKS, POP_STACK } = stacksState.actions;
const { getStacks } = stacksState.selectors;

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
    stacks: getStacks
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id, sound, soundVolume, vibration } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
    clearStacks: () => {
      dispatch(CLEAR_STACKS());
    },
    updateStack: stacks => {
      dispatch(UPDATE_STACKS(stacks));
    },
    popStack: () => {
      dispatch(POP_STACK());
    },
    readQRCode: async qrCode => {
      if (qrCode.type === "QR_CODE") {
        try {
          dispatch(UPDATE_CAMERA_ACTIVE(false));

          const friendId = qrCode.data;
          const friend = await addFriend(id, friendId);

          const feedMessage = `You and ${friend.firstName} ${friend.surname} are now friends!`;
          const feed = {
            profileImage: friend.profileImage,
            firstName: friend.firstName,
            surname: friend.surname,
            feedDate: new Date(),
            message: feedMessage
          };
          await addFeed(id, feed);
          dispatch(UPDATE_FEEDS(feed));
          pushNotification.localNotification({
            title: `You just added ${friend.firstName} ${friend.surname}`,
            message: "In the future this message will show where you two meet.",
            playSound: sound,
            number: soundVolume,
            vibrate: vibration
          });
          Alert.alert(
            "You added a friend!",
            `${friend.firstName} ${friend.surname} is now on your friend list.`
          );

          dispatch(UPDATE_FRIENDS(friend));
        } catch (err) {
          Alert.alert("Attempting to add a friend failed.", err.toString());
        }
      }
    }
  };
};
export default connect(mapStateToProps, null, mergeProps)(withNavigation(App));
