import React, { Component } from "react";
import "./MainForm.css";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import Button from "@material-ui/core/Button";

class MainForm extends Component {
  constructor() {
    super();
    this.state = {
      specializare: "",
      materie: "",
      profesor: "",
      sesiune: "",
      an_univ: 2019,
      an_stud: 1,
      data_exam: "2019-05-24",
      ora_exam: "07:30",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  handleChange(ev) {
    // console.log(ev.target.value);
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  render() {
    return (
      <div className="MainForm">
        <h1>Programare Examen</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="specializare">Specializare</label>
          <NativeSelect
            className="MainForm-Field"
            id="specializare"
            onChange={this.handleChange}
            name="specializare"
          >
            <option>Informatica-Economica</option>
            <option>Informatica-Matematica</option>
          </NativeSelect>
          <label htmlFor="materia">Materia</label>
          <NativeSelect
            className="MainForm-Field"
            id="materia"
            onChange={this.handleChange}
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
            value={this.state.profesor}
            onChange={this.handleChange}
          />
          <label htmlFor="sesiune">Perioada Sesiune</label>
          <NativeSelect
            className="MainForm-Field"
            id="sesiune"
            onChange={this.handleChange}
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
            value={this.state.an_univ}
            onChange={this.handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="An de studii"
            type="number"
            name="an_stud"
            value={this.state.an_stud}
            onChange={this.handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="Data examenului"
            type="date"
            name="data_exam"
            value={this.state.data_exam}
            onChange={this.handleChange}
          />
          <TextField
            style={{ marginBottom: "20px" }}
            label="Ora examenului"
            type="time"
            name="ora_exam"
            value={this.state.ora_exam}
            onChange={this.handleChange}
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
}

export default MainForm;
