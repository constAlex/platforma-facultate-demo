export const ADAUGA_PROGRAMARE = "ADAUGA_PROGRAMARE";
export const STERGE_PROGRAMARE = "STERGE_PROGRAMRE";
export const UPDATE_PROGRAMARE = "UPDATE_PROGRAMARE";

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
