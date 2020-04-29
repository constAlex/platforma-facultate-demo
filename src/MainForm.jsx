import React, { Component, useState } from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";


export default function MainForm({programari,addProgramare,stergeProgramare}) {
     const [form,setForm] = useState({
      specializare: "",
      materie: "",
      profesor: "",
      sesiune: "",
      an_univ: 2019,
      an_stud: 1,
      data_exam: "2019-05-24",
      ora_exam: "07:30",
    });
   const handleSubmit = (ev) => {
      ev.preventDefault();
      addProgramare(form);
      console.log('CE AM IN REDUX',programari);
    }
  
   const handleChange = (ev) => {
      // console.log(ev.target.value);
      setForm({...form,
        [ev.target.name]: ev.target.value,
      });
      
    }

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
          >
            <option>C#</option>
            <option>Java</option>
            <option defaultValue>Web Design</option>
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
            value={form.profesor}
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
            value={form.an_univ}
            onChange={handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="An de studii"
            type="number"
            name="an_stud"
            value={form.an_stud}
            onChange={handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="Data examenului"
            type="date"
            name="data_exam"
            value={form.data_exam}
            onChange={handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="Ora examenului"
            type="time"
            name="ora_exam"
            value={form.ora_exam}
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
}

