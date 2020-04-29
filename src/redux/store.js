import { createStore } from 'redux';
import { programareReducer } from './reducers';

export const store = createStore(programareReducer);