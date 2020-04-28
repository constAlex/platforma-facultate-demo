import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar";
import MainForm from "./MainForm";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className="App" maxWidth="md">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <MainForm />} />
        <Route exact path="/programare" render={() => <MainForm />} />
        <Route render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </Container>
  );
}

export default App;
