import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

//ws://192.168.1.113:8080/mircle/echo
//ws://10.214.12.66:8080/mircle/echo
//wss://echo.websocket.org
const Singleton = () => {
  let socket;
  const createSocket = () =>
    new WebSocket("ws://10.214.12.66:8080/mircle/echo");

  return {
    getSocket: () => {
      if (!socket) {
        socket = createSocket();
      }
      return socket;
    }
  };
};

const middleware = applyMiddleware(
  thunkMiddleware.withExtraArgument(Singleton)
);

const store = compose(middleware)(createStore)(rootReducer);

export default store;
