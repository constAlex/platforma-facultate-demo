import React from "react";
import "./App.sass";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import { MainContainer } from "./redux/containers/MainContainer";
import { FormContainer } from "./redux/containers/FormContainer";
import { UpdateListContainer } from "./redux/containers/UpdateListContainer";
import { DeleteContainer } from "./redux/containers/DeleteContainer";

function App() {
  return (
    <Container className="App" maxWidth="xl">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <MainContainer />} />
        <Route exact path="/programare" render={() => <FormContainer />} />
        <Route exact path="/stergere" render={() => <DeleteContainer />}/>
        <Route exact path="/modificare" render={() => <UpdateListContainer />} />
        <Route exact path="/modificare/:id" render={() => <FormContainer />} />
        <Route render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </Container>
  );
}

export default App;
