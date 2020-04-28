import React, { Component } from "react";
import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <AppBar position="static">
          <Tabs centered textColor="inherit" indicatorColor="primary">
            <Tab label="Programare" />
            <Tab label="Modificare" />
            <Tab label="Stergere" />
            <Tab label="Interogare" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
