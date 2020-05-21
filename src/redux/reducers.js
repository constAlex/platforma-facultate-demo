import {
  ADAUGA_PROGRAMARE,
  STERGE_PROGRAMARE,
  UPDATE_PROGRAMARE,
} from "../redux/actionNames";

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
      state[index] = action.payload.programare;
      return state;
    }
    default:
      return state;
  }
}

const programariReducer = (state, action) => {
  return {
    programari: actualizareProgramari(state.programari, action)
  };
};

// const programariReducer = combineReducers({
//   programari: actualizareProgramari,
//   programare: actualizareProgramare,
// });

export default programariReducer;
