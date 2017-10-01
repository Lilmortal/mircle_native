import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import QRCode from "./qrCode";
import { userState, webSocketState } from "../../states";

const { getId } = userState.selectors;

const { CONNECT_TO_WEB_SOCKET, SEND_MESSAGE } = webSocketState.actions;

const mapStateToProps = () => {
  return createStructuredSelector({
    id: getId
  });
};

const mapDispatchToProps = dispatch => {
  return {
    connect: () => {
      dispatch(CONNECT_TO_WEB_SOCKET());
    },
    sendMessage: message => {
      console.log(SEND_MESSAGE);
      dispatch(SEND_MESSAGE(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QRCode);
