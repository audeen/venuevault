//Navbar for editing a venue

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default class NavbarEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar
          Navbar
          className="fixed-top py-3 bg-primary justify-content-around"
        >
          <Link to="/">
            <i className="fas fa-window-close fa-2x"></i>
          </Link>
          <h3>Edit {this.props.venueName}</h3>
        </Navbar>
      </React.Fragment>
    );
  }
}
