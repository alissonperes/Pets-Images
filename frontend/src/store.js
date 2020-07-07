import { applyMiddleware, createStore } from "redux";
import { createPromise } from "redux-promise-middleware";

import thunk from "redux-thunk";
import reducer from "./reducers";

const promise = createPromise();

const middleware = applyMiddleware(promise, thunk);
export default createStore(reducer, middleware);
