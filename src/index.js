import React from "react";
import { Provider } from "react-redux";

import Routes from "./config/routes";
import store from "./store";

// This is for debugging purposes; this logs all network API calls to console. Uncomment for production.
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
  return global._fetch(uri, options, ...args).then(response => {
    console.log("Fetch", { request: { uri, options, ...args }, response });
    return response;
  });
};

const RouteProvider = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default RouteProvider;
