import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import { FormContainer, MainContainer } from "./redux/container";

function App() {
  return (
    <Container className="App" maxWidth="md">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route exact path="/programare" render={() => <FormContainer />} />
        <Route render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </Container>
  );
}

export default App;
