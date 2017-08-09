import App from "./app";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import cameraState from "../../states/camera";
import userDetailsState from "../../states/userDetails";
import settingsState from "../../states/settings";

const { getCameraActive } = cameraState.selectors;
const { getFirstName, getSurname } = userDetailsState.selectors;
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
