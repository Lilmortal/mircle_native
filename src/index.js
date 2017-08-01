import React from "react";
import { Provider } from "react-redux";

import Routes from "./config/routes";
import store from "./store";

const RouteProvider = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default RouteProvider;
