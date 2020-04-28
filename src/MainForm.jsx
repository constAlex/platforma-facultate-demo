import React, { Component } from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";

class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      materia: "",
      profesor: "",
    };
  }
  render() {
    return (
      <div className="MainForm">
        <h1>Programare Examen</h1>
        <form>
          <label for="specializare">Specializare</label>
          <NativeSelect className="MainForm-Field" id="specializare">
            <option>Informatica-Economica</option>
            <option>Informatica-Matematica</option>
          </NativeSelect>
          <label for="materia">Materia</label>
          <NativeSelect className="MainForm-Field" id="materia">
            <option>C#</option>
            <option>Java</option>
            <option selected>Web Design</option>
            <option>Baze de Date SQL</option>
            <option>Algebra Liniara</option>
            <option>Econometrie</option>
          </NativeSelect>
          <label for="profesor">Nume Profesor</label>
          <TextField
            style={{ marginBottom: "20px" }}
            type="text"
            id="profesor"
          />
          <label for="sesiune">Perioada Sesiune</label>
          <NativeSelect className="MainForm-Field" id="sesiune">
            <option>Vara</option>
            <option>Iarna</option>
          </NativeSelect>
          <TextField
            style={{ marginBottom: "20px" }}
            label="An Universitar"
            type="number"
            defaultValue="2019"
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="An de studii"
            type="number"
            defaultValue="1"
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="Data examenului"
            type="date"
            defaultValue="2019-05-24"
          />
          <TextField label="Ora examenului" type="time" defaultValue="07:30" />
        </form>
      </div>
    );
  }
}

export default MainForm;
