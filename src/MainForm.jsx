import React, { Component } from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";

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
          <select id="sesiune">
            <option>Informatica-Economica</option>
            <option>Informatica-Matematica</option>
          </select>
          <label for="materia">Materia</label>
          <select id="materia">
            <option>C#</option>
            <option>Java</option>
            <option selected>Web Design</option>
            <option>Baze de Date SQL</option>
            <option>Algebra Liniara</option>
            <option>Econometrie</option>
          </select>
          <label for="profesor">Nume Profesor</label>
          <input type="text" id="profesor" />
          <label for="sesiune">Perioada Sesiune</label>
          <select id="sesiune">
            <option>Vara</option>
            <option>Iarna</option>
          </select>
          <TextField label="An Universitar" type="number" defaultValue="2019" />
          <TextField label="An de studii" type="number" defaultValue="1" />
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
