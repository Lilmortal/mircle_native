import { combineReducers } from "redux";
import {
  cameraState,
  registerDetailsState,
  userDetailsState,
  settingsState
} from "./states";

export default combineReducers({
  [cameraState.constants.NAME]: cameraState.reducers,
  [registerDetailsState.constants.NAME]: registerDetailsState.reducers,
  [userDetailsState.constants.NAME]: userDetailsState.reducers,
  [settingsState.constants.NAME]: settingsState.reducers
});
