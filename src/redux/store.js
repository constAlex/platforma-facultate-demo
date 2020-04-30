import { createStore } from "redux";
import programariReducer from "./reducers";

// state tree should be a single object.
// if you use combineReducers, you can't initiate state here
const initialState = {
  programare: {},
  programari: [],
};
export const store = createStore(programariReducer, initialState);
