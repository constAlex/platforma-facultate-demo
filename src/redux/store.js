import { createStore } from "redux";
import programariReducer from "./reducers";

// state tree should be a single object.
const initialState = {
  programari: [],
};
export const store = createStore(programariReducer, initialState);
