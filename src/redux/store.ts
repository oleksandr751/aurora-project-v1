import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools();

export const store = createStore(rootReducer, enhancer);
