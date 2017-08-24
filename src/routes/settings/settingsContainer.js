import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Settings from "./settings";
import { settingsState } from "../../states";

const {
  UPDATE_SOUND,
  UPDATE_SOUND_VOLUME,
  UPDATE_VIBRATION
} = settingsState.actions;
const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateSound: sound => {
      dispatch(UPDATE_SOUND(sound));
    },
    updateSoundVolume: soundVolume => {
      dispatch(UPDATE_SOUND_VOLUME(soundVolume));
    },
    updateVibration: vibration => {
      dispatch(UPDATE_VIBRATION(vibration));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
