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
        <Navbar bg="dark" expand="lg">
          <Link to="/">
            <i className="fas fa-window-close fa-2x"></i>
          </Link>
          <Navbar.Brand>Edit {this.props.venueName}</Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}
