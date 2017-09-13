import * as actionTypes from "./actionTypes";

const initialState = {
  hasSound: true,
  soundVolume: 10,
  hasVibration: true
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_SOUND: {
      return {
        ...state,
        hasSound: payload.hasSound
      };
    }
    case actionTypes.UPDATE_SOUND_VOLUME: {
      return {
        ...state,
        soundVolume: payload.soundVolume
      };
    }
    case actionTypes.UPDATE_VIBRATION: {
      return {
        ...state,
        hasVibration: payload.hasVibration
      };
    }
    default:
      return state;
  }
};

export default reducer;
