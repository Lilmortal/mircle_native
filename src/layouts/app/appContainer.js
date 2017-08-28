import App from "./app";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { addFriend } from "../../api";
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

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { sound, soundVolume, vibration } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    readQRCode: async qrCode => {
      if (qrCode.type === "QR_CODE") {
        try {
          await addFriend(qrCode.data);
          pushNotification.localNotification({
            title: `You just added user with id ${qrCode.data}`,
            message: "You two met at Botany Down Centre.",
            playSound: sound,
            number: soundVolume,
            vibrate: vibration
          });
        } catch (err) {
          console.error(err);
        }
      }
    }
  };
};
export default connect(mapStateToProps, null, mergeProps)(App);
