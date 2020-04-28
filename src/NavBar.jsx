import React from "react";
import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <AppBar position="static">
        <Tabs centered>
          <Link className="NavBar-Link" to="/programare">
            Programare
          </Link>
          <Link className="NavBar-Link" to="/modificare">
            Modificare
          </Link>
          <Link className="NavBar-Link" to="/stergere">
            Stergere
          </Link>
          <Link className="NavBar-Link" to="/interogare">
            Interogare
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
}

export default NavBar;
