import {
  ADAUGA_PROGRAMARE,
  STERGE_PROGRAMARE,
  UPDATE_PROGRAMARE,
} from "./actions";

export const programariReducer = (state, action) => {
  switch (action.type) {
    case ADAUGA_PROGRAMARE:
      return [...state, action.programare];

    case STERGE_PROGRAMARE: {
      const index = state.indexOf(action.programare);
      if (index > -1) {
        return state.splice(index, 1);
      }
      return state;
    }
    case UPDATE_PROGRAMARE: {
      const item = state.filter(
        (programare) => programare.id === action.programare.id
      )[0];
      const index = state.indexOf(item);
      if (index > -1) {
        state[index] = action.programare;
      }
      return state;
    }
    default:
      return state;
  }
};
