import { legacy_createStore } from "redux";
import RootReducers from "./Reducer";
const store = legacy_createStore(RootReducers);
export default store;
