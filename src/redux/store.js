import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root.reducer";
// logger to log states
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
