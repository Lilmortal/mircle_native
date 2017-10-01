// export const CONNECT_TO_WEB_SOCKET = (
//   url = "ws://192.168.1.113:8080/mircle/echo"
// ) => ({
//   type: "WEBSOCKET:CONNECT",
//   payload: { url }
// });

let ws;
let ds;
export const CONNECT_TO_WEB_SOCKET = message => (
  dispatch,
  getState,
  Singleton
) => {
  ws = Singleton().getSocket();
  ws.onopen = test => {
    ws.onmessage = event => {
      console.log(event.data);
    };
  };
  ws.onerror = error => {
    console.log(error);
  };
};

export const SEND_MESSAGE = message => (dispatch, getState, Singleton) => {
  ds = Singleton().getSocket();
  console.log(ws == ds, ws === ds, ws, ds);
  ds.onopen = () => {
    ds.send(message);
  };
};
