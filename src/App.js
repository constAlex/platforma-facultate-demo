import React from "react";
import "./App.sass";
import Container from "@material-ui/core/Container";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import { FormContainer, MainContainer, DeleteContainer } from "./redux/container";

function App() {
  return (
    <Container className="App" maxWidth="xl">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route exact path="/programare" render={() => <FormContainer />} />
        <Route exact path="/stergere" render={() => <DeleteContainer />}/>
        <Route render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </Container>
  );
}

export default App;
