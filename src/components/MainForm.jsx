import React, { useEffect } from "react";
import "../MainForm.css";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";
import useInputState from "../hooks/inputHook";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const MainForm = ({
  programari,
  adaugaProgramare,
  updateProgramare,
}) => {
  const [examDetails, changeExamDetails, addId] = useInputState();
  const {id} = useParams();

  useEffect(() => {
   if(id){
     let programareForUpdate = programari.find(programare => programare.id === id);
     Object.keys(programareForUpdate).map(key => changeExamDetails(key,programareForUpdate[key]));
   }
  }, []);

  const handleUpdate = (ev) => {
    ev.preventDefault();
    updateProgramare(examDetails,id);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log(examDetails);
    addId(uuidv4());
    adaugaProgramare(examDetails);
    // console.log("aceasta este o programare", programare);
    console.log("programarile din redux:", programari);
  };

  const handleChange = (ev) => {
    changeExamDetails(ev.target.name, ev.target.value);
  };

  return (
    <div className="MainForm">
      {id ?  <h1>Update Examen</h1> :  <h1>Programare Examen</h1>}
      <form onSubmit={id ? handleUpdate : handleSubmit}>
        <label htmlFor="specializare">Specializare</label>
        <NativeSelect
          className="MainForm-Field"
          id="specializare"
          value={examDetails.specializare}
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
          value={examDetails.sesiune}
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
         {!id ? `Planifica Examenul` : `Modifica programarea`} 
        </Button>
      </form>
    </div>
  );
};

export default MainForm;
