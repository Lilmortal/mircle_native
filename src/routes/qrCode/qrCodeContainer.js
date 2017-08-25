import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import QRCode from "./qrCode";
import { userState } from "../../states";

const { getId } = userState.selectors;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId
  });
};

export default connect(mapStateToProps)(QRCode);
