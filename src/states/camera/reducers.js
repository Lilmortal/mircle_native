import * as actionTypes from "./actionTypes";

const initialState = {
  active: false
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_CAMERA_ACTIVE: {
      console.log(payload);
      return {
        ...state,
        active: payload.active
      };
    }
    default:
      return state;
  }
};

export default reducer;
