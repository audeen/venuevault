//Navbar for Landing Page

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarHome extends Component {
  render() {
    return (
      <Navbar className="fixed-top py-3 bg-primary justify-content-around">
        <Link to="/delete">
          <i class="far fa-trash-alt fa-2x"></i>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>VenueVault</h2>
        </Link>

        <Link to="/create">
          <i className="fas fa-plus-circle fa-2x"></i>
        </Link>
      </Navbar>
    );
  }
}
