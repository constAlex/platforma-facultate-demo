export const ADAUGA_PROGRAMARE = "ADAUGA_PROGRAMARE";
export const STERGE_PROGRAMARE = "STERGE_PROGRAMRE";
export const UPDATE_PROGRAMARE = "UPDATE_PROGRAMARE";

// action creators
export function adaugaProgramare(programare) {
  return { type: ADAUGA_PROGRAMARE, programare };
}

export function stergeProgramare() {
  return { type: STERGE_PROGRAMARE };
}

export function updateProgramare() {
  return { type: UPDATE_PROGRAMARE };
}
