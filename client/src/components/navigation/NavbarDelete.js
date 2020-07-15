import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Container className="sticky-top">
          <Navbar className="fixed-top py-3 bg-danger justify-content-around">
            <Link to="/">
              <i className="fas fa-window-close fa-2x"></i>
            </Link>
            <h3 style={{ color: "black" }}>Delete Venues</h3>
          </Navbar>
          <Container />
        </Container>
      </React.Fragment>
    );
  }
}
