import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Camera from "../../../../components/camera";
import cameraState from "../../../../states/camera";

const { UPDATE_CAMERA_ACTIVE } = cameraState.actions;
const { getCameraActive } = cameraState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    isCameraActive: getCameraActive
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onPress: () => {
      dispatch(UPDATE_CAMERA_ACTIVE(true));
    },
    onPressOut: () => {
      dispatch(UPDATE_CAMERA_ACTIVE(false));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
