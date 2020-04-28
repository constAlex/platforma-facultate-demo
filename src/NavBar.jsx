import React from "react";
import "./NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <AppBar className="NavBar-AppBar" position="static">
        <Link className="NavBar-Link" to="/programare" value="/programare">
          Programare
        </Link>
        <Link className="NavBar-Link" to="/modificare" value="/modificare">
          Modificare
        </Link>
        <Link className="NavBar-Link" to="/stergere">
          Stergere
        </Link>
        <Link className="NavBar-Link" to="/interogare">
          Interogare
        </Link>
      </AppBar>
    </div>
  );
}

export default NavBar;
