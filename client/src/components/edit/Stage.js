import React from "react";
import { Container } from "react-bootstrap";

export class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 4) {
      return null;
    }
    console.log(this.props.handleChange);
    return (
      <Container className="mt-5 pt-5">
        <div className="form-group">
          <label>Clear Width: </label>
          <input
            type="text"
            className="form-control"
            id="stageWidth"
            name="stageWidth"
            value={this.props.stageWidth}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Clear Depth: </label>
          <input
            type="text"
            className="form-control"
            id="stageDepth"
            name="stageDepth"
            value={this.props.stageDepth}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Clear Height: </label>
          <input
            type="text"
            className="form-control"
            id="stageHeight"
            name="stageHeight"
            value={this.props.stageHeight}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Stage-Level: </label>
          <input
            type="text"
            className="form-control"
            id="stageLevel"
            name="stageLevel"
            value={this.props.stageLevel}
            onChange={this.props.handleChange}
          />
        </div>
      </Container>
    );
  }
}

export default Stage;
