import React from "react";
import "../NavBar.css";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

function NavBar() {
  return (
    <div className="NavBar">
      <Container fluid>
        <Row align="center" nowrap gutterWidth={0} debug>
          <Col style={{ marginRight: "5px", height: "100%" }} xlg={4} debug>
            <AppBar className="NavBar-AppBar" position="static">
              <Link className="NavBar-Link" to="/" value="/">
                Pagina Principala
              </Link>
            </AppBar>
          </Col>
          <Col xs={8} debug>
            <AppBar className="NavBar-AppBar" position="static">
              <Link
                className="NavBar-Link"
                to="/programare"
                value="/programare"
              >
                Programare
              </Link>
              <Link
                className="NavBar-Link"
                to="/modificare"
                value="/modificare"
              >
                Modificare
              </Link>
              <Link className="NavBar-Link" to="/stergere">
                Stergere
              </Link>
              {/* <Link className="NavBar-Link" to="/interogare">
                Interogare
              </Link> */}
            </AppBar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NavBar;
