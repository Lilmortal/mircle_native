import { combineReducers } from "redux";
import cameraState from "./states/camera";

export default combineReducers({
  [cameraState.constants.NAME]: cameraState.reducers
});
