import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

//ws://192.168.1.113:8080/mircle/echo
const Singleton = () => {
  let socket;
  const createSocket = () => new WebSocket("ws://echo.websocket.org");

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
