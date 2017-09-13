import * as actionTypes from "./actionTypes";

export const UPDATE_SOUND = hasSound => ({
  type: actionTypes.UPDATE_SOUND,
  hasSound
});

export const UPDATE_SOUND_VOLUME = soundVolume => ({
  type: actionTypes.UPDATE_SOUND_VOLUME,
  soundVolume
});

export const UPDATE_VIBRATION = hasVibration => ({
  type: actionTypes.UPDATE_VIBRATION,
  hasVibration
});
