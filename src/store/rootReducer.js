import { combineReducers } from "redux";
import {
  cameraState,
  friendState,
  registrationState,
  userState,
  settingsState,
  webSocketState
} from "../states";

export default combineReducers({
  [cameraState.constants.NAME]: cameraState.reducers,
  [friendState.constants.NAME]: friendState.reducers,
  [registrationState.constants.NAME]: registrationState.reducers,
  [userState.constants.NAME]: userState.reducers,
  [settingsState.constants.NAME]: settingsState.reducers,
  [webSocketState.constants.NAME]: webSocketState.reducers
});
