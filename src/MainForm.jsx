import React, { Component } from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";

class MainForm extends Component {
  render() {
    return (
      <div className="MainForm">
        <h1>Programare Examen</h1>
        <form>
          <label for="materia">Materia</label>
          <input type="text" name="meteria" />
          <label for="profesor">Profesor</label>
          <input type="text" name="profesor" />
          <label for="sesiune">Sesiunea</label>
          <input type="text" name="sesiune" />
          <TextField label="An Universitar" type="number" defaultValue="2019" />
          <TextField label="An de studii" type="number" defaultValue="1" />
          <label for="sectia">Sectia</label>
          <input type="text" name="sectia" />
          <TextField
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
