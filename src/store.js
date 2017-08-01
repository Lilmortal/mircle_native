import { applyMiddleware, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunkMiddleware);

const store = compose(middleware)(createStore)(rootReducer);

export default store;
