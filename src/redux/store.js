import { createStore } from "redux";
import { programariReducer } from "./reducers";

const initialState = [];

export const store = createStore(programariReducer, initialState);
