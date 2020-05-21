import {UPDATE_PROGRAMARE, ADAUGA_PROGRAMARE, STERGE_PROGRAMARE} from './actionNames';

// action creators
export function adaugaProgramare(programare) {
  return { type: ADAUGA_PROGRAMARE, programare };
}

export function stergeProgramare(id) {
  return { type: STERGE_PROGRAMARE, id };
}

export function updateProgramare(programare, id) {
  return { type: UPDATE_PROGRAMARE, payload: { programare, id } };
}
