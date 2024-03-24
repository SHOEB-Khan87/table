import { rootReducer } from "../Reducers/reducer";
import { legacy_createStore } from "redux";

export const store = legacy_createStore(rootReducer)