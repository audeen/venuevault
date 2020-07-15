// Part of the Multi-Step-Form for editing a Venue, responsible for Tech

import React from "react";
import { Form, Container } from "react-bootstrap";

export class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 5) {
      return null;
    }
    console.log(this.props.currentStep);
    return (
      <Container className="mt-5 pt-5">
        <Form.Group>
          <Form.Label>Available Tech: </Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            id="availableTech"
            name="availableTech"
            value={this.props.availableTech}
            onChange={this.props.handleChange}
          />
        </Form.Group>
      </Container>
    );
  }
}

export default Tech;
