import * as actionTypes from "./actionTypes";
import { routeKeys } from "../../config";

const initialState = {
  stacks: [routeKeys.Login]
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.CLEAR_STACKS: {
      return initialState;
    }
    case actionTypes.UPDATE_STACKS: {
      return {
        ...state,
        stacks: state.stacks.concat(payload.stacks)
      };
    }
    case actionTypes.POP_STACK: {
      state.stacks.pop();
      return {
        ...state,
        stacks: state.stacks
      };
    }
    default:
      return state;
  }
};

export default reducer;
