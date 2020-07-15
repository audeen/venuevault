//Navbar for creating a venue

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarCreate extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="fixed-top py-3 bg-primary justify-content-around">
          <Link to="/">
            <i className="fas fa-window-close fa-2x"></i>
          </Link>
          <h2 className="mx-auto">Create New Venue</h2>
        </Navbar>
      </React.Fragment>
    );
  }
}
