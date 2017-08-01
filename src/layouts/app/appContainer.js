import App from "./app";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import cameraState from "../../states/camera";

const { getCameraActive } = cameraState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    cameraActive: getCameraActive
  });
};

export default connect(mapStateToProps)(App);
