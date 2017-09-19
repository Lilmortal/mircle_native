import { Alert } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { updateUserPassword } from "../../api";
import Settings from "./settings";
import { userState, settingsState } from "../../states";

const { getEmailAddress } = userState.selectors;

const {
  UPDATE_SOUND,
  UPDATE_SOUND_VOLUME,
  UPDATE_VIBRATION
} = settingsState.actions;
const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId,
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration
  });
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { id } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
    updateSound: sound => {
      dispatch(UPDATE_SOUND(sound));
    },
    updateSoundVolume: soundVolume => {
      dispatch(UPDATE_SOUND_VOLUME(soundVolume));
    },
    updateVibration: vibration => {
      dispatch(UPDATE_VIBRATION(vibration));
    },
    updateUserPassword: async (oldPassword, newPassword) => {
      try {
        await updateUserPassword(id, oldPassword, newPassword);
        Alert.alert("Your password has been updated.");
      } catch (err) {
        Alert.alert(
          "There is an error when attempting to change password",
          err
        );
      }
    }
  };
};
export default connect(mapStateToProps, null, mergeProps)(Settings);
