import {
  ADAUGA_PROGRAMARE,
  STERGE_PROGRAMARE,
  UPDATE_PROGRAMARE,
} from "./actions";

// import { combineReducers } from "redux";

function actualizareProgramari(state, action) {
  switch (action.type) {
    case ADAUGA_PROGRAMARE:
      return [...state, action.programare];

    case STERGE_PROGRAMARE:
      return state.filter((elem) => elem.id !== action.id);

    case UPDATE_PROGRAMARE: {
      const item = state.filter(
        (programare) => programare.id === action.payload.id
      )[0];
      const index = state.indexOf(item);
      // nu cred ca mai trebuie sa verifici din moment ce daca il stergi nu mai ai cum sa-l actualizezi
      // if (index > -1) state[index] = action.payload.programare;
      state[index] = action.payload.programare;
      return state;
    }
    default:
      return state;
  }
}

function actualizareProgramare(state, action) {
  return state;
}

const programariReducer = (state, action) => {
  return {
    programari: actualizareProgramari(state.programari, action),
    programare: actualizareProgramare(state.programare, action),
  };
};

// const programariReducer = combineReducers({
//   programari: actualizareProgramari,
//   programare: actualizareProgramare,
// });

export default programariReducer;
