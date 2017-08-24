import App from "./app";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cameraState, userState, settingsState } from "../../states";

const { getCameraActive } = cameraState.selectors;
const { getFirstName, getSurname } = userState.selectors;
const { getSound, getSoundVolume, getVibration } = settingsState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    cameraActive: getCameraActive,
    firstName: getFirstName,
    surname: getSurname,
    sound: getSound,
    soundVolume: getSoundVolume,
    vibration: getVibration
  });
};

export default connect(mapStateToProps)(App);
