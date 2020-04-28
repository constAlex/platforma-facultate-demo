import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import NavBar from './NavBar';
import MainForm from './MainForm';

function App() {
  return (
    <Container className="App" maxWidth="md">
      <NavBar />
      <MainForm />
    </Container>
  );
}

export default App;
