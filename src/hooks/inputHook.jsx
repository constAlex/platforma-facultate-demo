import { useState } from "react";

function useInputState() {
  const initialState = {
    specializare: "",
    materie: "Web Design",
    profesor: "",
    sesiune: "",
    an_univ: 2019,
    an_stud: 1,
    data_exam: "2019-05-24",
    ora_exam: "07:30",
  };

  const [state, setState] = useState(initialState);

  function changeInput(name, value) {
    setState((prev) => ({ ...prev, [name]: value }));
  }

  return [state, changeInput];
}

export default useInputState;
