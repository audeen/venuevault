import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class NavbarDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark" expand="lg">
          <Link to="/">
            <i className="fas fa-window-close fa-2x"></i>
          </Link>
          <Navbar.Brand>Delete Venues</Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
