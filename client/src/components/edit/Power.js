import React from "react";
import { Form, Container } from "react-bootstrap";

export class Power extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 6) {
      return null;
    }

    return (
      <Container className="mt-5 pt-5">
        <Form.Group>
          <Form.Label>Stage Left: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="stageLeft"
            name="stageLeft"
            value={this.props.stageLeft}
            onChange={this.props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Stage Right: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="stageRight"
            name="stageRight"
            value={this.props.stageRight}
            onChange={this.props.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="submit"
            value="Save Venue"
            className="btn btn-success"
          />
        </Form.Group>
      </Container>
    );
  }
}

export default Power;
