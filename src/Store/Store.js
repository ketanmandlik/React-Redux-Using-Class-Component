import CombineReducers from "../Combin Reducer/CombineReducer";
import { createStore } from "redux";

const store = createStore(
  CombineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
