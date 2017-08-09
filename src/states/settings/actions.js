import * as actionTypes from "./actionTypes";

export const UPDATE_SOUND = sound => ({
  type: actionTypes.UPDATE_SOUND,
  sound
});

export const UPDATE_SOUND_VOLUME = soundVolume => ({
  type: actionTypes.UPDATE_SOUND_VOLUME,
  soundVolume
});

export const UPDATE_VIBRATION = vibration => ({
  type: actionTypes.UPDATE_VIBRATION,
  vibration
});
