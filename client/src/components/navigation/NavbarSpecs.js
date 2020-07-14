import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class NavbarSpecs extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              VenueVault
            </Link>
          </Navbar.Brand>
          <Link to="/create">
            <i className="fas fa-plus-circle fa-2x"></i>
          </Link>
        </Navbar>
      </React.Fragment>
    );
  }
}
