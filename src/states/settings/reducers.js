import * as actionTypes from "./actionTypes";

const initialState = {
  sound: true,
  soundVolume: 10,
  vibration: true
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_SOUND: {
      return {
        ...state,
        sound: payload.sound
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
        vibration: payload.vibration
      };
    }
    default:
      return state;
  }
};

export default reducer;
