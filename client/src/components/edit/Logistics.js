import React from "react";
import { Form } from "react-bootstrap";

export class Logistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 3) {
      return null;
    }
    console.log(this.props.handleChange);
    return (
      <React.Fragment>
        <Form.Group>
          <Form.Label>Loading Path: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="loadingPath"
            name="loadingPath"
            value={this.props.loadingPath}
            onChange={this.props.handleChange}
          />
        </Form.Group>

        <div className="form-group">
          <label>Storage: </label>
          <input
            type="text"
            className="form-control"
            id="storage"
            name="storage"
            value={this.props.storage}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Parking: </label>
          <input
            type="text"
            className="form-control"
            id="parking"
            name="parking"
            value={this.props.parking}
            onChange={this.props.handleChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Logistics;
