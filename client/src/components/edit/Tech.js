import React from "react";
import { Form } from "react-bootstrap";

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
      <React.Fragment>
        <Form.Group>
          <Form.Label>Available Tech: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="availableTech"
            name="availableTech"
            value={this.props.availableTech}
            onChange={this.props.handleChange}
          />
        </Form.Group>
      </React.Fragment>
    );
  }
}

export default Tech;
