import { combineReducers } from "redux";
import {
  cameraState,
  registrationState,
  userState,
  settingsState
} from "./states";

export default combineReducers({
  [cameraState.constants.NAME]: cameraState.reducers,
  [registrationState.constants.NAME]: registrationState.reducers,
  [userState.constants.NAME]: userState.reducers,
  [settingsState.constants.NAME]: settingsState.reducers
});
