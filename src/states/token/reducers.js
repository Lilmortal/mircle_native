import * as actionTypes from "./actionTypes";

const initialState = {
  token: ""
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.UPDATE_AUTHORIZATION_TOKEN: {
      return {
        ...state,
        token: payload.token
      };
    }
    default:
      return state;
  }
};

export default reducer;
