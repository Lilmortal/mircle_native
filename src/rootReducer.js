import { combineReducers } from "redux";
import cameraState from "./states/camera";
import userDetailsState from "./states/userDetails";
import settingsState from "./states/settings";

export default combineReducers({
  [cameraState.constants.NAME]: cameraState.reducers,
  [userDetailsState.constants.NAME]: userDetailsState.reducers,
  [settingsState.constants.NAME]: settingsState.reducers
});
