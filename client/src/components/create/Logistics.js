import React from "react";

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
        <div className="form-group">
          <label>Loading Path: </label>
          <input
            type="text"
            className="form-control"
            id="loadingPath"
            name="loadingPath"
            value={this.props.loadingPath}
            onChange={this.props.handleChange}
          />
        </div>
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
        <div className="form-group">
          <label>OSM-Code: </label>
          <input
            type="text"
            className="form-control"
            id="osm"
            name="osm"
            value={this.props.osm}
            onChange={this.props.handleChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Logistics;
