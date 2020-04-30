import React from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import useInputState from "./hooks/inputHook";

const MainForm = ({ programari, adaugaProgramare, stergeProgramare }) => {
  const [examDetails, changeExamDetails] = useInputState();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log(examDetails);
    adaugaProgramare(examDetails);
    console.log("programarile din redux:", programari);
  };

  const handleChange = (ev) => {
    changeExamDetails(ev.target.name, ev.target.value);
  };

  return (
    <div className="MainForm">
      <h1>Programare Examen</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="specializare">Specializare</label>
        <NativeSelect
          className="MainForm-Field"
          id="specializare"
          onChange={handleChange}
          name="specializare"
        >
          <option>Informatica-Economica</option>
          <option>Informatica-Matematica</option>
        </NativeSelect>
        <label htmlFor="materia">Materia</label>
        <NativeSelect
          className="MainForm-Field"
          id="materia"
          onChange={handleChange}
          name="materie"
          value={examDetails["materie"]}
        >
          <option>C#</option>
          <option>Java</option>
          <option>Web Design</option>
          <option>Baze de Date SQL</option>
          <option>Algebra Liniara</option>
          <option>Econometrie</option>
        </NativeSelect>
        <label htmlFor="profesor">Nume Profesor</label>
        <TextField
          style={{ marginBottom: "20px" }}
          type="text"
          id="profesor"
          name="profesor"
          value={examDetails["profesor"]}
          onChange={handleChange}
        />
        <label htmlFor="sesiune">Perioada Sesiune</label>
        <NativeSelect
          className="MainForm-Field"
          id="sesiune"
          onChange={handleChange}
          name="sesiune"
        >
          <option>Vara</option>
          <option>Iarna</option>
        </NativeSelect>
        <TextField
          style={{ marginBottom: "20px" }}
          label="An Universitar"
          type="number"
          name="an_univ"
          value={examDetails["an_univ"]}
          onChange={handleChange}
        />
        <TextField
          style={{ marginBottom: "20px" }}
          label="An de studii"
          type="number"
          name="an_stud"
          value={examDetails["an_stud"]}
          onChange={handleChange}
        />
        <TextField
          style={{ marginBottom: "20px" }}
          label="Data examenului"
          type="date"
          name="data_exam"
          value={examDetails["data_exam"]}
          onChange={handleChange}
        />
        <TextField
          style={{ marginBottom: "20px" }}
          label="Ora examenului"
          type="time"
          name="ora_exam"
          value={examDetails["ora_exam"]}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Planifica Examenul
        </Button>
      </form>
    </div>
  );
};

export default MainForm;
