import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class NavbarCreate extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" expand="lg">
          <Link to="/">
            <i className="fas fa-window-close fa-2x"></i>
          </Link>
          <Navbar.Brand>Create New Venue</Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
