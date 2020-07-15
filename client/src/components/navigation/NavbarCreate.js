import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarCreate extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="fixed-top">
          <Navbar bg="dark" expand="lg">
            <Link to="/">
              <i className="fas fa-window-close fa-2x"></i>
            </Link>
            <Navbar.Brand>Create New Venue</Navbar.Brand>
          </Navbar>
        </Container>
      </React.Fragment>
    );
  }
}
