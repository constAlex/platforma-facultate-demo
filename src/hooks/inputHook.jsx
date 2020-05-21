import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useInputState() {
  const initialState = {
    id: uuidv4(),
    specializare: "Informatica-Economica",
    materie: "Web Design",
    profesor: "",
    sesiune: "vara",
    an_univ: 2019,
    an_stud: 1,
    data_exam: "2019-05-24",
    ora_exam: "07:30",
  };

  const [state, setState] = useState(initialState);

  function changeInput(name, value) {
    setState((prev) => ({ ...prev, [name]: value }));
  }

  function addId(id) {
    setState((prev) => ({ ...prev, id: id }));
  }

  return [state, changeInput, addId];
}

export default useInputState;
